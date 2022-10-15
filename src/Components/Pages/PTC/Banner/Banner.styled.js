import styled from "styled-components";

import bgImg from "./Assets/Images/office.jpg";

export const BannerParentDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
