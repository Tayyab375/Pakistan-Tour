import styled from "styled-components";

export const BgImageDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url(${(props) => props.bgimg});
  height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

export const CarouselContainerDiv = styled.div`
  position: relative;
  width: 30%;

  & .carousel .control-dots .dot {
    height: 10px;
    width: 10px;
    z-index: 2;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    height: 500px;
  }
`;

export const OverLayDiv = styled.div`
  background-color: transparent;
  position: absolute;
  height: 390px;
  width: auto;
  top: 0px;
  right: 2vw;
  left: 2vw;
  z-index: 1;
`;
