import React from "react";
import styled from "styled-components";
import { drakGreen, lightGray } from "../../../Reusable/Colors";

const ObjectiveDiv = styled.div`
  background: ${lightGray};
  padding: 5% 7%;

  h1 {
    color: ${drakGreen};
  }
`;

const Objectives = () => {
  return (
    <ObjectiveDiv>
      <h1>Objectives</h1>
      <br />
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <br />
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <br />
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente.
        </li>
        <br />
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        <br />
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          temporibus.
        </li>
        <br />
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad
          tempora!
        </li>
        <br />
      </ul>
    </ObjectiveDiv>
  );
};

export default Objectives;
