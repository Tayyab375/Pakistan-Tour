import styled from "styled-components";
import { green, lightGreen, white } from "../Colors";

export const CardContainerDiv = styled.div`
  min-width: 300px;
  max-width: 300px;
  height: 435px;
  border-radius: 15px;
  margin: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: 0.5s ease;

  :hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    z-index: 1;
  }
`;

export const ImgDiv = styled.div`
  /* background-image: url(${(props) => props.bgImg});
  background-position: center;
  background-size: cover; */
  width: 100%;
  height: 55%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentDiv = styled.div`
  position: relative;
  background-color: ${green};
  height: 45%;
  width: 100%;
  padding-top: 45px;

  span {
    height: 75px;
    width: 100px;
    text-align: center;
    display: block;
    position: absolute;
    bottom: 158px;
    left: 100px;
    color: white;
    background-color: ${lightGreen};
    padding: 10px;
    font-weight: 700;
    word-spacing: 5px;
    font-size: 1.4rem;
  }

  h3 {
  }

  p {
    font-size: 1.23rem;
    height: 65px;
    text-align: justify;
  }

  p,
  h3 {
    padding: 2px 15px;
    color: ${white};
  }

  a {
    text-decoration: none;
  }
`;
