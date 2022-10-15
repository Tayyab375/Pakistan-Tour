import styled from "styled-components";
import { drakGreen } from "../../../../Reusable/Colors";

export const SubsidiariesParentDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  h1 {
    color: ${drakGreen};
    margin-bottom: 1.5%;

    @media screen and (max-width: 700px) {
      margin-top: 4%;
    }
  }
`;
