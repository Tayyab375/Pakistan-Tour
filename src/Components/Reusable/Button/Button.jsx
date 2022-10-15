import React from "react";
import styled from "styled-components";
import { drakGreen, lightGreen, white } from "../Colors";

const Styledbtn = styled.button`
  cursor: pointer;
  background-color: ${drakGreen};
  color: ${white};
  border-radius: 25px;
  border: none;
  font-size: 1.1rem;
  transition: 0.6s ease;
  margin: 12px;
  padding: 3px 15px;

  :hover {
    color: ${lightGreen};
  }
`;

const Button = (props) => {
  return <Styledbtn>{props.btntext}</Styledbtn>;
};

export default Button;
