import styled from "styled-components";
import { white } from "../../../../../Reusable/Colors";

export const ItemParentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2%;
  padding: 0% 3.5%;
  margin-bottom: 8%;
`;

export const ItemDiv = styled.div`
  width: 35%;

  h2 {
    color: ${white};
    text-align: center;

    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
`;

export const ImgDiv = styled.div`
  background-color: white;
  padding: 5px;
  border-radius: 1pc;

  img {
    width: 100%;
    max-height: 300px;
    min-height: 300px;
    border-radius: 1pc;
    object-fit: cover;

    @media screen and (max-width: 1000px) {
      max-height: 200px;
      min-height: 200px;
    }

    @media screen and (max-width: 650px) {
      max-height: 100px;
      min-height: 100px;
    }
  }
`;
