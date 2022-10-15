import styled from "styled-components";

export const CarouselContainerDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 0 4%;

  & .carousel .control-dots .dot {
    height: 10px;
    width: 10px;
    margin-bottom: 5%;
    z-index: 2;
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
