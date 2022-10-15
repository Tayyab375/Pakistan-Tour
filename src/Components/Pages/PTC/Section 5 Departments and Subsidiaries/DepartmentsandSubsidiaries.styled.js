import styled from "styled-components";
import { black } from "../../../Reusable/Colors";

export const Headingh2 = styled.h2`
  text-align: center;
  margin: 5% 0% 3% 0%;
  color: ${black};
`;

export const DepSubParentDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3%;
  padding: 0 4%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
