import styled from "styled-components";
import { drakGreen } from "../../../../Reusable/Colors";

export const ContainerDiv = styled.div`
  width: 35%;
  padding: 2% 1.5% 1.5% 1.5%;
  background-color: rgb(249 249 249);

  h1 {
    color: ${drakGreen};
  }

  p {
    padding: 0px 20px 0 0;
    text-align: justify;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;
