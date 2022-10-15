import styled from "styled-components";

export const ParentDiv = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ImgDiv = styled.div`
  width: 100%;
  z-index: -1;

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

  h1 {
    color: white;
    font-size: 3.2rem;
    @media screen and (max-width: 850px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
`;
