import styled from "styled-components";

import { green, white } from "../../../Reusable/Colors";

export const ManagementParentDiv = styled.div`
  margin-top: 6%;
  background: ${green};
  width: 100%;
  display: flex;
  gap: 2.5%;
  align-items: center;
  padding: 5%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContentDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 750px) {
    width: 85%;
  }

  h1 {
    color: ${white};

    @media screen and (max-width: 850px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: ${white};
    text-align: justify;
  }
`;

export const ImgDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 750px) {
    width: 85%;
    margin-top: 4%;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }
`;
