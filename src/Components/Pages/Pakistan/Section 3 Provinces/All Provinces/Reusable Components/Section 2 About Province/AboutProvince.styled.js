import styled from "styled-components";
import { drakGreen, lightGray } from "../../../../../../Reusable/Colors";

export const ParentDiv = styled.div`
  margin-top: 6%;
  background-color: ${lightGray};
  display: flex;
  align-items: center;
  gap: 4%;
  padding: 1% 2%;

  @media screen and (max-width: 1130px) {
    gap: 2.5%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const AboutProvinceDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 1130px) {
    width: 60%;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  h1 {
    color: ${drakGreen};

    @media screen and (max-width: 1130px) {
      font-size: 30px;
    }
  }

  p {
    text-align: justify;
  }
`;

export const VideoDiv = styled.div`
  width: 50%;
  background-color: white;
  border: 1px solid #dee2e6 !important;
  padding: 0.5rem !important;

  @media screen and (max-width: 1130px) {
    width: 40%;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 3%;
    width: 80%;
  }

  video {
    width: 100%;
  }
`;
