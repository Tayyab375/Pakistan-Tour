import React from "react";

// ----------------components import----------------
import Departments from "./Departments/Departments";
import Subsidiaries from "./Subsidiaries/Subsidiaries";

// ----------------styling import-------------------
import {
  DepSubParentDiv,
  Headingh2,
} from "./DepartmentsandSubsidiaries.styled";

const DepartmentsandSubsidiaries = () => {
  return (
    <>
      <Headingh2>
        PTC functions through its following departments and subsidiaries
      </Headingh2>

      <DepSubParentDiv>
        <Departments />
        <Subsidiaries />
      </DepSubParentDiv>
    </>
  );
};

export default DepartmentsandSubsidiaries;
