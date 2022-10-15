import styled from "styled-components";
import { drakGreen, lightGray, white } from "../../../Reusable/Colors";

export const WhereToGoParentDiv = styled.div`
  margin-top: 6%;
  background-color: ${lightGray};
  width: 100%;
  padding: 1.5%;

  h1 {
    color: ${drakGreen};
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1%;

    @media screen and (max-width: 1000px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;

export const ButtonDiv = styled.div`
  button {
    margin: 0px 28px 15px 0px;
    border: none;
    padding: 0%;
    background-color: transparent;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;

    @media screen and (max-width: 520px) {
      margin: 0px 13px 15px 0;
      font-size: 1rem;
    }

    &.activebtn {
      color: ${drakGreen};
      background-color: ${white};
      padding: 4px 12px;
      border-radius: 25px;
    }
  }
`;

export const ParentContentDiv = styled.div`
  width: 100%;
`;

export const ContentDiv = styled.div`
  display: none;

  &.activeContent {
    display: block;
  }
`;
