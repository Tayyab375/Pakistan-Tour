import styled from "styled-components";
import { drakGreen, lightGray } from "../../../Reusable/Colors";

export const ParentDiv = styled.div`
  background: ${lightGray};
  margin-top: 8%;
  padding: 0 25px;
  padding-bottom: 20px;
  h1 {
    margin-bottom: 2%;
    color: ${drakGreen};
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;

    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 1.3rem;
    }
  }
  p {
    margin-bottom: 10px;
  }
`;

export const PointsDiv = styled.div`
  padding-left: 15px;

  p {
    text-align: justify;
  }

  h3 {
    margin-bottom: 4px;
  }
`;
