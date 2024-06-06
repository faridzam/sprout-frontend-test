'use client'

import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: any) {
      setValue(event.matches);
    }
    const result = window.matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

export const useDeviceSizes = () => {

  // complex
  const isSmallMobile = useMediaQuery("(max-width: 359px)");
  const isMobile = useMediaQuery("(min-width: 360px) and (max-width: 539px)");
  const isSurfaceDuo = useMediaQuery("(min-width: 540px) and (max-width: 719px)");
  const isTablet = useMediaQuery("(min-width: 720px) and (max-width: 1023px)");
  const isSmallDesktop = useMediaQuery("(min-width: 1024px) and (max-width: 1439px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1440px)");

  // simple
  const isSmall = useMediaQuery("(max-width: 719px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");

  return {
    isSmallMobile,
    isMobile,
    isSurfaceDuo,
    isTablet,
    isSmallDesktop,
    isLargeDesktop,
    isSmall,
    isLarge
  };
}