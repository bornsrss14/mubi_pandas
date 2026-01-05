import { useEffect, useState } from "react";

const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

export function useBreakpoint() {
  const getMatches = () => ({
    isMobile: window.matchMedia(breakpoints.mobile).matches,
    isTablet: window.matchMedia(breakpoints.tablet).matches,
    isDesktop: window.matchMedia(breakpoints.desktop).matches,
  });

  const [matches, setMatches] = useState(getMatches);
  useEffect(() => {
    const mediaQueries = {
      mobile: window.matchMedia(breakpoints.mobile),
      tablet: window.matchMedia(breakpoints.tablet),
      desktop: window.matchMedia(breakpoints.desktop),
    };

    const handleChange = () => {
      setMatches(getMatches());
    };
    Object.values(mediaQueries).forEach((mq) =>
      mq.addEventListener("change", handleChange)
    );

    return () => {
      Object.values(mediaQueries).forEach((mq) =>
        mq.removeEventListener("change", handleChange)
      );
    };
  }, []);
  return matches;
}
