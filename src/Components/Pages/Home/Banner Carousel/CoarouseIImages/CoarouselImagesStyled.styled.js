import styled from "styled-components";

export const ImageDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.bgimg});
  height: 92vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    height: 92vh;
    width: 100%;
    object-fit: cover;
  }

  h4 {
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 8px;
    font-size: 1.3rem;
    margin-left: 65px;

    @media screen and (max-width: 850px) {
      font-size: 1.15rem;
    }
  }

  p {
    color: white;
    font-weight: 300;
    letter-spacing: 2px;
    margin-left: 65px;
    margin-top: 6px;
    font-size: 2.7rem;
    width: 60%;
    text-align: left;
    text-transform: uppercase;

    @media screen and (max-width: 850px) {
      font-size: 2rem;
    }
  }
`;
