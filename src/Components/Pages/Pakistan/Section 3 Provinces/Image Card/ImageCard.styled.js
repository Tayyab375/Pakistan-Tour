import styled from "styled-components";
import { lightGreen, white } from "../../../../Reusable/Colors";

export const CardSection = styled.section`
  min-height: 400px;
  max-height: 400px;
  max-width: 37.5%;
  min-width: 37.5%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2.5%;
  transition: 0.6s ease;

  @media screen and (max-width: 991px) {
    max-width: 70%;
    min-width: 70%;
    margin-bottom: 3.5%;
  }

  :hover {
    transform: scale(1.06);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media screen and (max-width: 500px) {
      transform: scale(1);
    }
  }

  :nth-child(4n-2) {
    max-width: 50%;
    min-width: 50%;

    @media screen and (max-width: 991px) {
      max-width: 70%;
      min-width: 70%;
    }
  }

  :nth-child(4n-1) {
    max-width: 50%;
    min-width: 50%;

    @media screen and (max-width: 991px) {
      max-width: 70%;
      min-width: 70%;
    }
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    object-position: center;
  }
`;

export const ContentDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0px;
  bottom: 0;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  padding: 0% 0% 0% 0%;

  div {
    position: absolute;
    right: 0;
    left: 0px;
    bottom: 0;
    padding: 0px 30px 30px 30px;
  }

  h1 {
    color: ${white};
    font-size: 2rem;
  }

  p {
    color: ${white};
    text-align: justify;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 1.06rem;
  }

  a {
    color: ${white};
    text-decoration: none;
    transition: 0.6s ease;

    :hover {
      color: ${lightGreen};
    }
  }
`;
