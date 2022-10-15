import styled from "styled-components";

export const ContentParentDiv = styled.div`
  display: flex;
  gap: 3%;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 840px) {
    flex-direction: column-reverse;
  }

  p {
    width: 60%;

    @media screen and (max-width: 840px) {
      width: 95%;
    }
  }

  div {
    width: 40%;

    @media screen and (max-width: 840px) {
      width: 50%;
      margin-bottom: 1.5%;
    }

    @media screen and (max-width: 490px) {
      width: 90%;
    }

    @media screen and (max-width: 300px) {
      width: 100%;
    }

    img {
      width: 100%;
    }

    span {
      width: 100%;
    }
  }
`;
