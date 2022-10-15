import styled from "styled-components";
import { lightGreen, white } from "../../../../../../Reusable/Colors";

export const CardSection = styled.section`
  min-height: 350px;
  max-height: 350px;
  max-width: 280px;
  min-width: 280px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 1.5% 2%;
  transition: 0.6s ease;
  background: rgb(99 99 255);

  :hover {
    & .bgColor,
    .line,
    .link,
    img {
      transform: translateX(0);
    }
  }

  img {
    width: 100%;
    height: 62vh;
    object-fit: cover;
    object-position: center;
    transform: translateX(-3.5%);
    transition: 0.5s ease;
  }
`;

export const BlackBgDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0px;
  bottom: 0;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  padding: 0% 0% 0% 0%;
`;

export const HeadingDiv = styled.div`
  position: absolute;
  top: 60%;
  left: 21%;
  z-index: 2;

  a {
    color: ${white};
    text-decoration: none;
  }

  h1 {
    color: ${white};
    font-size: 1.9rem;
    font-weight: 500;
  }
`;

export const HoverColorDiv = styled.div`
  z-index: 1;
  background: linear-gradient(45deg, #ff89e9 0%, #05abe0 100%);
  position: absolute;
  top: 0;
  right: 0;
  left: 0px;
  bottom: 0;
  height: 100%;
  opacity: 0.5;
  transform: translateX(-100%);
  transition: 0.3s ease;
`;

export const LinkDiv = styled.div`
  position: absolute;
  top: 77%;
  left: 6.5%;
  z-index: 2;
  width: 239px;
  overflow: hidden;
  height: 100%;

  & .line {
    width: 239px;
    height: 3.5px;
    background-color: white;
    transform: translateX(100%);
    transition: 0.5s ease;
  }

  & .link {
    position: absolute;
    left: 5%;
    color: ${white};
    text-decoration: none;
    transition: 0.5s ease;
    margin-top: 17%;
    transform: translateX(-150%);

    :hover {
      color: ${lightGreen};
    }
  }
`;
