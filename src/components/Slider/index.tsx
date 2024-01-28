import React, { useState } from "react";
import { SliderContainer, SliderContent } from "./Slider.styled";
import { dataSlider } from "../../helpers/dataSlider";
import ItemSlider from "./ItemSlider";
import NavSlider from "./NavSlider";
import { useItemsPerPage, useHoveredItem } from "../../hooks";

const Slider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = useItemsPerPage();
  const totalItems = dataSlider.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = Math.min((currentPage + 1) * itemsPerPage, totalItems);
  const handleTooltip = true

  const {
    hoveredItem,
    tooltipPosition,
    showTooltip,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoveredItem();

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <SliderContainer>
        <NavSlider
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <SliderContent itemsperpage={itemsPerPage}>
          {dataSlider
            .slice(startIdx, endIdx)
            .map((item: any, index: number) => (
              <React.Fragment key={item.id}>
                <ItemSlider
                  handleTooltip={handleTooltip}
                  item={item}
                  index={index}
                  showTooltip={showTooltip}
                  tooltipPosition={tooltipPosition}
                  hoveredItem={hoveredItem}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </React.Fragment>
            ))}
        </SliderContent>
      </SliderContainer>
    </div>
  );
};

export default Slider;
