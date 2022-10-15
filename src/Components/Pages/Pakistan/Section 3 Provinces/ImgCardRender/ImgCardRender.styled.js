import styled from "styled-components";
import { drakGreen } from "../../../../Reusable/Colors";

export const ParentDiv = styled.div`
  margin-top: 6%;
`;

export const HeadingDiv = styled.div`
  h1 {
    margin-bottom: 1%;
    font-size: 2.5rem;
    color: ${drakGreen};
    text-align: center;

    @media screen and (max-width: 700px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
`;

export const CardsContainerDiv = styled.div`
  gap: 2.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1% 0;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;
