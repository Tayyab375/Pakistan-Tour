import styled from "styled-components";

export const CuisineParentDiv = styled.div`
  background: rgb(93, 153, 116);

  h1 {
    color: rgb(158, 194, 172);
    text-align: center;
    font-weight: 400;
    letter-spacing: 13px;
    font-size: 3rem;

    @media screen and (max-width: 800px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 650px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 250px) {
      font-size: 1rem;
    }
  }

  h6 {
    color: white;
    text-align: center;
    font-size: 1.04rem;
    padding: 0 10.5%;
    margin-bottom: 6%;
  }
`;
