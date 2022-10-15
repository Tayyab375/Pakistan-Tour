import styled from "styled-components";

export const CrouselParentDiv = styled.div`
  position: relative;
  & .carousel .control-dots .dot {
    height: 10px;
    width: 10px;
  }
`;

export const OverlayDiv = styled.div`
  background-color: transparent;
  position: absolute;
  height: 88vh;
  width: auto;
  top: 0;
  right: 6vw;
  left: 6vw;
  z-index: 1;
`;
