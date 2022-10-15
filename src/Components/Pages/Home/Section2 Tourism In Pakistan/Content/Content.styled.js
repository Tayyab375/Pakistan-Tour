import styled from "styled-components";

// --------------------import color----------------------------
import { drakGreen } from "../../../../Reusable/Colors";

export const ContainerDiv = styled.div`
  width: 35%;
  padding: 2% 1.5% 0% 1.5%;
  background-color: rgb(249 249 249);

  h1 {
    color: ${drakGreen};
    margin-bottom: 7.5px;
  }

  p {
    text-align: justify;
  }

  h4 {
    margin-bottom: 7.5px;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    padding-bottom: 5%;
  }
`;
