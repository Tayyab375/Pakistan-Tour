import styled from "styled-components";
import { drakGreen, lightGray } from "../../../../Reusable/Colors";

export const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  /* height: 85.8vh; */
  background: ${lightGray};
  align-items: center;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 980px) {
    width: 80%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 980px) {
      border-radius: 16px;
      z-index: 1;
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }
  }
`;

export const ContentDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0% 1.3% 0% 7%;

  @media screen and (max-width: 980px) {
    width: 80%;
    justify-content: end;
    padding: 0px 2px 0px 6px;
    margin-bottom: 4%;
    margin-top: 2%;
  }

  h1 {
    color: ${drakGreen};
    font-size: 3rem;
    font-weight: 800;
  }

  span {
    color: ${drakGreen};
    font-weight: 600;
  }

  p {
    text-align: justify;
    margin-top: 20px;
  }
`;
