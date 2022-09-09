import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";

const useAverageColor = (currentIndexCard: number | null) => {
  const [currentColor, setCurrentColor] = useState<number[]>([]);
  const imgsArrayRef = useRef<any>([]);

  useEffect(() => {
    if (currentIndexCard === null) return;

    const fac = new FastAverageColor();
    const setResultsRequest = async () => {
      fac
        .getColorAsync(imgsArrayRef.current[currentIndexCard])
        .then((color) => {
          setCurrentColor(color?.value);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    setResultsRequest();
  }, [currentIndexCard]);

  return [currentColor, imgsArrayRef] as const;
};

export default useAverageColor;
