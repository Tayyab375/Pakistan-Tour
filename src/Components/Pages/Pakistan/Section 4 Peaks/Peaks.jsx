import React from "react";

import { PeaksParentDiv } from "./peaks.styled.js";

// ---------------import components--------------
import CustomizedAccordions from "./Accordion/Accordion.jsx";

const Peaks = () => {
  return (
    <PeaksParentDiv>
      <h1>Peaks</h1>
      <p>
        Pakistan is home to 108 peaks above 7,000 metres and probably as many
        peaks above 6,000 m. There is no count of the peaks above 5,000 and
        4,000 m. Five of the 14 highest independent peaks in the world (the
        eight-thousanders) are in Pakistan (four of which lie in the
        surroundings of Concordia; the confluence of Baltoro Glacier and Godwin
        Austen Glacier).
        <br />
        <br />
      </p>
      <CustomizedAccordions />
    </PeaksParentDiv>
  );
};

export default Peaks;
