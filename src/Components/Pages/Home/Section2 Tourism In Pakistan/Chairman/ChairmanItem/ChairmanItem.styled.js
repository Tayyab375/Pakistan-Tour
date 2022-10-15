import styled from "styled-components";

// ------------import color---------------------
import { green, white } from "../../../../../Reusable/Colors";

export const ItemContianerDiv = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 25.5%;
  }

  div {
    background: ${green};
    padding: 10px 10px 50px 10px;
  }

  & .heading {
    text-transform: uppercase;
  }

  p {
    text-align: center;
    color: ${white};
    font-size: 1.15rem;
    margin-bottom: 3px;
  }
`;
