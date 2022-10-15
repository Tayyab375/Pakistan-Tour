import React from "react";
import { SubsidiariesParentDiv } from "./Subsidiaries.styled";

import CustomizedAccordions from "./Accordion/Accordion";

const Subsidiaries = () => {
  return (
    <SubsidiariesParentDiv>
      <h1>Subsidiaries</h1>
      <CustomizedAccordions />
    </SubsidiariesParentDiv>
  );
};

export default Subsidiaries;
