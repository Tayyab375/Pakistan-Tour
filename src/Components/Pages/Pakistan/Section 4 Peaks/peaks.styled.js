import styled from "styled-components";
import { drakGreen } from "../../../Reusable/Colors";

export const PeaksParentDiv = styled.div`
  padding: 0 7%;

  h1 {
    color: ${drakGreen};
    text-align: center;
    font-size: 2.5rem;

    @media screen and (max-width: 700px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }

  p {
    text-align: justify;
    /* padding-bottom: 2.5%; */
  }
`;
