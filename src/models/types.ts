export type Position = {
  x: number;
  y: number;
};

export type SliderItemProps = {
  item: any;
  index: number;
  showTooltip: boolean;
  hoveredItem: number | null;
  tooltipPosition: { top: number; left: number };
  onMouseEnter: (
    position: Position,
    index: number,
    tooltipSize: TooltipSize
  ) => void;
  onMouseLeave: (position: Position) => void;
};

export type ItemSliderProps = {
  item: any;
  index: number;
  onMouseEnter: (
    position: Position,
    index: number,
    tooltipSize: TooltipSize
  ) => void;
  onMouseLeave: (position: Position) => void;
  showTooltip: boolean;
  handleTooltip: boolean;
  hoveredItem: number | null;
  tooltipPosition: { top: number; left: number };
};
export type NavContainerProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  // setSlideDirection: React.Dispatch<React.SetStateAction<"in" | "out">>;
};
export type TooltipSize = {
  tooltipHeight: number;
  tooltipWidth: number;
};
