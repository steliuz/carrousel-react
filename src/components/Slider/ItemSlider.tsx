import React, { useRef } from "react";
import {
  SliderItem,
  CardImage,
  XIcon,
  Tooltip,
  TitleGreen,
} from "./Slider.styled";
import Info from "../../assets/icons/info.svg";
import { TooltipSize, ItemSliderProps } from "../../models/types";
import usePosition from "../../hooks/usePosition";

const ItemSlider: React.FC<ItemSliderProps> = ({
  item,
  index,
  onMouseEnter,
  onMouseLeave,
  showTooltip,
  hoveredItem,
  tooltipPosition,
  handleTooltip,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const position = usePosition();

  let tooltipSize: TooltipSize = {
    tooltipHeight: 0,
    tooltipWidth: 0,
  };

  if (tooltipRef.current) {
    tooltipSize = {
      tooltipHeight: tooltipRef.current.offsetHeight || 0,
      tooltipWidth: tooltipRef.current.offsetWidth || 0,
    };
  }

  return (
    <>
      <SliderItem>
        <CardImage
          src={require(`../../assets/img-games/${item.image}.png`)}
          alt={`../../assets/img-games/${item.image}.png`}
        />
        {handleTooltip && (
          <XIcon
            ref={position.ref}
            id={item.id}
            onMouseEnter={() => onMouseEnter(position, index, tooltipSize)}
            onMouseLeave={() => onMouseLeave(position)}
          >
            <img src={Info} alt="icon-Info" />
          </XIcon>
        )}
      </SliderItem>
      {handleTooltip && (
        <Tooltip
          ref={tooltipRef}
          show={showTooltip && hoveredItem === index ? "true" : "false"}
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
          }}
        >
          <div>
            RTP:{" "}
            <TitleGreen style={{ marginLeft: "4px" }}>
              {item.infoGame.RTP}%
            </TitleGreen>
          </div>
          <hr style={{ margin: "0px 8px" }} />
          <div>Mayor ganancia reciente</div>
          <div>{item.infoGame.maxProfit}</div>
        </Tooltip>
      )}
    </>
  );
};

export default ItemSlider;
