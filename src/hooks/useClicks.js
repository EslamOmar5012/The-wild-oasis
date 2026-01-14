import { useEffect, useRef } from "react";

export const useClicks = (handler, stopBubbling = true) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };

    document.addEventListener("click", handleClick, stopBubbling);

    return removeEventListener("click", handleClick, stopBubbling);
  }, [handler, stopBubbling]);

  return ref;
};
