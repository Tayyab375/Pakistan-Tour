import React from "react";

// -----------------import images---------------------
import rightside from "./Assets/Images/rightside.jpg";

// ----------------import components-----------------
import AboutPtcb from "./About PTCB/AboutPtcb";
import AboutPtc from "./About PTC/AboutPtc";

// ----------------------content const --------------
const ptcParagraph1 = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolorem odit, cum expedita optio quos ex repudiandae cupiditate ea assumenda error quo fugiat quam id autem temporibus quia animi veniam!`;

const ptcParagraph2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit facere expedita inventore tempore sunt autem voluptatum, dolor quam! Quam ipsum expedita, suscipit saepe temporibus fugit repudiandae! Doloribus, ex fugit?`;

const Section3AboutPtcAndPtcb = () => {
  return (
    <>
      <AboutPtc
        heading={"PTC"}
        subheading={"Pakistan Tourism Corporation"}
        ptcParagraph1={ptcParagraph1}
        ptcParagraph2={ptcParagraph2}
        rightimg={rightside}
      />
      <AboutPtcb />
    </>
  );
};

export default Section3AboutPtcAndPtcb;
