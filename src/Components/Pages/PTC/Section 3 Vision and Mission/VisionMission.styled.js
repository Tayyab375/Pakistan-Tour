import styled from "styled-components";

import { drakGreen, lightGray } from "../../../Reusable/Colors";

export const VisionMissionParentDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 4%;
  align-items: center;
  padding: 7% 6%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const VisionContentDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 750px) {
    width: 85%;
  }

  h1 {
    color: ${drakGreen};

    @media screen and (max-width: 850px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }

  p {
    text-align: justify;
  }
`;

export const MissionContentDiv = styled.div`
  width: 50%;
  background: ${lightGray};
  border-radius: 12px;
  padding: 3%;

  @media screen and (max-width: 750px) {
    width: 85%;
    margin-top: 4%;
  }

  h1 {
    color: ${drakGreen};

    @media screen and (max-width: 850px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
`;
