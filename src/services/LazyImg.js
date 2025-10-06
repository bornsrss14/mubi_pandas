import { useState } from "react";

export const LazyImg = ({ src, alt, placeholder }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="container-rela">
      {/* Place holder, utilizo mi imagen base o un blur*/}
      {placeholder && (
        <img
          className={`image-abs transition ${
            loaded ? "img-full-cover-0" : "img-full-cover-100"
          }`}
          alt="ros"
          src={placeholder}
        ></img>
      )}
      {/* imagen final renderizada*/}
      <img
        alt={alt}
        src={src}
        onLoad={() => setLoaded(true)}
        className={`img-full-cover transition ${
          loaded ? "img-full-cover-100" : "img-full-cover-0"
        }`}
      ></img>
    </div>
  );
};

export default LazyImg;
