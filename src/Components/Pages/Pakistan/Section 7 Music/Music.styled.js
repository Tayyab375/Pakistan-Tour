import styled from "styled-components";
import { black, drakGreen, lightGray, white } from "../../../Reusable/Colors";

export const MusicParentDiv = styled.div`
  background-color: ${lightGray};
  width: 100%;
  display: flex;
  gap: 6%;
  padding: 1.5%;
  align-items: center;

  @media screen and (max-width: 995px) {
    padding: 0;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: ${drakGreen};
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1%;

    @media screen and (max-width: 1000px) {
      font-size: 2.2rem;
    }
  }
`;

export const ButtonDiv = styled.div`
  button {
    margin: 0px 28px 15px 0px;
    border: none;
    padding: 0%;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    @media screen and (max-width: 520px) {
      margin: 0px 13px 15px 0;
      font-size: 0.9rem;
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
  width: 50%;

  @media screen and (max-width: 995px) {
    width: 90%;
  }
`;

export const ContentDiv = styled.div`
  display: none;

  &.activeContent {
    display: block;
  }

  h2 {
    color: ${black};
    margin-bottom: 8px;
  }

  p {
    text-align: justify;
  }
`;

export const ImgDiv = styled.div`
  width: 50%;
  display: none;

  @media screen and (max-width: 995px) {
    width: 60%;
    margin-top: 4%;
  }

  &.activeImg {
    display: block;
  }

  img {
    max-width: 100%;
  }
`;
