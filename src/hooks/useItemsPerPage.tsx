import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const windowSize = useWindowSize();

  useEffect(() => {
    let newItemsPerPage = 6;

    if (windowSize.width <= 1200) {
      newItemsPerPage = 5;
    }
    if (windowSize.width <= 766) {
      newItemsPerPage = 4;
    }
    if (windowSize.width <= 567) {
      newItemsPerPage = 3;
    }

    setItemsPerPage(newItemsPerPage);
  }, [windowSize.width]);

  return itemsPerPage;
};

export default useItemsPerPage;
