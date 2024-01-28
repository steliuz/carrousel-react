import styled, {keyframes} from "styled-components";

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const SliderContainer = styled.div`
  background-color: #161d2b;
  padding: 20px;
  position: relative;
  height: auto;
  width: 100%;
  overflow:hidden;
  `;

export const NavSliderContainer = styled.div`
  padding: 30px 0px;
  position: relative;
  z-index: 2;
`;

export const NavPaginationContainer = styled.div<{ align: string }>`
  z-index: 2;
  display: flex;
  gap: 5px;
  justify-content: ${(props) => props.align || "end"};
`;

export const CustomButton = styled.button`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 3px;
  background: rgba(84, 101, 140, ${(props) => (props.disabled ? 0.3 : 1)});
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  box-shadow: 0 0 0 transparent;
  display: grid;
  place-content: center;
`;
// animation: ${(props) => props.slideDirection === "in" ? slideIn : slideOut} 0.5s ease; 
export const SliderContent = styled.div<{ itemsperpage: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.itemsperpage}, 1fr);
  gap: 10px;
  transition: margin-left 0.5s ease;
  position: relative;

  

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
`;

export const SliderItem = styled.div`
  max-width: 300px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #d9d9d9;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 1200px) {
    max-width: 230px;
    width: 100%;
    height: 200px;
  }
  @media (max-width: 992px) {
    max-width: 170px;
    width: 100%;
    height: auto;
    object-fit:contain
  }

  @media (max-width: 567px) {
    width: 100%;
    max-width: 150px;
    height: auto;
    max-height: 150px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;


`;

export const Tooltip = styled.div<{
  show: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 250px;
  min-height: 50px;
  height: auto;
  border-radius: 8px;
  font-size: 14px;
  background: #182233;
  box-shadow: 8px 12px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 4px;
  box-sizi: border-box;
  transition: opacity 0.3s ease;
  z-index:3;
  text-aling: left;
  padding:8px;
  opacity:${(props) => (props.show === 'true'  ? 1 : 0)};
  visibiliy: ${(props) => (props.show === 'true' ? "visible" : "hidden")};

  & > div:export irst-child {
    max-wiexport th: 32%;
  }

  & > div:first-child,
  & > div:nth-child(2),
  & > div:nth-child(3) {
    width: auto;
    border-radius: 4px;
    background: rgba(103, 119, 154, 0.3);
    padding: 6px;
    margin: 8px;
    margin-bottom: 16px;
  }

  & > div:nth-child(4) {
    width: auto;
    color: #00ffa3;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    border-radius: 4px;
    background: rgba(103, 119, 154, 0.3);
    padding: 6px;
    margin: -8px 8px 8px 8px;
    max-width: 45%;
  }
`;

export const XIcon = styled.div`
  position: absolute;
  top: 2%;
  right: 4%;
  cursor: pointer;
`;
export const TitleGreen = styled.span`
  color: #00ffa3;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;