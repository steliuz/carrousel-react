import { useState, useCallback } from "react";

const usePosition = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const getPosition = (ref: HTMLElement) => {
    const position = ref?.getBoundingClientRect();

    const x = position?.left ?? 0 + window.scrollX;
    const y = position?.top ?? 0 + window.scrollY;

    if (ref) {
      setX(x);
      setY(y);
    }
  };

  const ref = useCallback((node: any) => {
    if (node !== null) {
      getPosition(node);
      window.addEventListener("resize", () => getPosition(node));
    }
  }, []);

  return { x, y, ref };
};

export default usePosition;
