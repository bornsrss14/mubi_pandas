import { useState, useEffect, useRef, useCallback } from "react";

/*Utilizo un Set (conjunto) para el caché global para mis imagenes ya precargadas
y evitar el proceso de doble renderizado */

const imageCache = new Set();
export function useOptimizedImage(src, options = {}) {
  const { threshold = 0.1, rootMargin = "100px", placeholder = null } = options;
  const [state, setState] = useState({
    src: placeholder,
    isLoading: true,
    hasError: false,
  });
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  /*Utilizo una función para cargar la imagen */
  const loadImage = useCallback(async () => {
    if (!src) return;
    /*Voy a saltar la evaluación de carga */
    if (imageCache.has(src)) {
      setState({ src, isLoading: false, hasError: false });
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));
    const img = new Image();
    img.src = src;

    const startTime = performance.now();

    try {
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      const loadtime = performance.now() - startTime;
      if (loadtime < 100) {
        await new Promise((res) => {
          setTimeout(res, 100 - loadtime);
        });
      }

      imageCache.add(src);

      setState({ src, isLoading: false, hasError: false });
    } catch (error) {
      console.error("Error loading img", error);
      setState((prev) => ({ ...prev, isLoading: false, hasError: true }));
    }
  }, [src]);

  /*Mantengo mi obsercador para LazyLoad */
  const setObserverRef = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (!node) return;
      imgRef.current = node;
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadImage();
            observerRef.current.disconnect();
          }
        },
        { threshold, rootMargin }
      );
      observerRef.current.observe(node); // importante para visualizar la imagen
    },
    [loadImage, threshold, rootMargin]
  );

  /*Al desmontar ocurre */
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return { ref: setObserverRef, ...state };
}

export function OptimizedImage({
  src,
  placeholder,
  alt = "",
  className = "",
  skeletonClassName = "",
  errorFallback = "Error al cargar la imagen",
}) {
  const {
    ref,
    src: imageSrc,
    isLoading,
    hasError,
  } = useOptimizedImage(src, {
    placeholder,
    rootMargin: "200px",
  });
  if (hasError) {
    return (
      <div
        aria-label={alt | errorFallback}
        role="img"
        className={`optimized-image error`}
      >
        <span className="optimized-image_error-text">{errorFallback}</span>
      </div>
    );
  }
  return (
    <div ref={ref} className={`optimized-image ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`optimized-image_img  ${isLoading ? "loading" : "loaded"}`}
        loading="lazy"
        decoding="async"
      />
      {isLoading && (
        <div className={`optimized-image_skeleton ${skeletonClassName}`}></div>
      )}
    </div>
  );
}
