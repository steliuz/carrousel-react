// useHoveredItem.ts
import { useState } from 'react';
import useWindowSize from "./useWindowSize";
import { Position, TooltipSize } from "../models/types";


const useHoveredItem = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const windowSize = useWindowSize();


  const handleMouseEnter = (
    positionIcon: Position,
    index: number,
    tooltipSize: TooltipSize
  ) => {
    setHoveredItem(index);
    setShowTooltip(true);

    const left = positionIcon.x;
    const top = positionIcon.y;
    const tooltipWidth = tooltipSize.tooltipWidth;
    const tooltipHeight = tooltipSize.tooltipHeight;

    const windowWidth = windowSize.width;
    const windowHeight = windowSize.height;

    const spaceInCardX = windowWidth - (tooltipWidth + left);
    const spaceInCardY = windowHeight - (windowHeight - top + tooltipHeight);

    if (spaceInCardX < 0 && spaceInCardY > 0) {
      console.log(1);
      setTooltipPosition({
        top: -tooltipHeight,
        left: left - tooltipWidth,
      });
    } else if (spaceInCardX < 0 && spaceInCardY < 0) {
      console.log(2);
      setTooltipPosition({
        top: top - tooltipHeight / 2,
        left: left - tooltipHeight * 1.5,
      });
    } else if (spaceInCardY < 0 && spaceInCardX > 0) {
      console.log(3);
      setTooltipPosition({
        top: top - tooltipHeight / 2,
        left: left - tooltipWidth * 0.55,
      });
    } else if (spaceInCardY < 0 && spaceInCardX < 0) {
      console.log(4);
      setTooltipPosition({
        top: top - tooltipHeight / 2,
        left: left - tooltipWidth * 0.55,
      });
    } else {
      setTooltipPosition({
        top: -tooltipHeight,
        left: left - tooltipHeight * 0.85,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setShowTooltip(false);
  };

  return { hoveredItem, tooltipPosition, showTooltip, handleMouseEnter, handleMouseLeave };
};

export default useHoveredItem;
