import styled from "styled-components";

export const CarouselContainerDiv = styled.div`
  position: relative;
  width: 25%;

  & .carousel .control-dots .dot {
    height: 10px;
    width: 10px;
    margin-bottom: 5%;
    z-index: 2;
  }

  img {
    width: 25%;
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
`;

export const OverLayDiv = styled.div`
  background-color: transparent;
  position: absolute;
  height: 100%;
  width: auto;
  top: 0;
  right: 6vw;
  left: 6vw;
  z-index: 1;
`;
