import React from "react";
import {
  NavPaginationContainer,
  CustomButton,
  NavSliderContainer,
} from "./Slider.styled";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";

import { NavContainerProps } from "../../models/types";

const NavSlider: React.FC<NavContainerProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
  // setSlideDirection
}) => {
  const isNextDisabled = totalPages === currentPage + 1;
  const isPrevDisabled = currentPage === 0;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage < totalPages ? nextPage : prevPage;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // const handleNextPage = () => {
  //   setSlideDirection("out");
  //   setTimeout(() => {
  //     setCurrentPage((prevPage) => {
  //       const nextPage = prevPage + 1;
  //       return nextPage < totalPages ? nextPage : prevPage;
  //     });
  //     setSlideDirection("in");
  //   }, 200); // Ajusta el tiempo para que coincida con la duración de la animación CSS
  // };
  
  // const handlePrevPage = () => {
  //   setSlideDirection("out");
  //   setTimeout(() => {
  //     setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  //     setSlideDirection("in");
  //   }, 200); // Ajusta el tiempo para que coincida con la duración de la animación CSS
  // };

  return (
    <NavSliderContainer>
      <NavPaginationContainer align="end">
        <CustomButton onClick={handlePrevPage} disabled={isPrevDisabled}>
          <img src={arrowLeft} alt="icon-left" />
        </CustomButton>
        <CustomButton onClick={handleNextPage} disabled={isNextDisabled}>
          <img src={arrowRight} alt="icon-left" />
        </CustomButton>
      </NavPaginationContainer>
    </NavSliderContainer>
  );
};

export default NavSlider;
