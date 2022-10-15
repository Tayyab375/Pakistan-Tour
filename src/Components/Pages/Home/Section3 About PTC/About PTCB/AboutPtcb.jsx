import React from "react";

// ------------------import styled---------------------
import { ContainerDiv, ImageDiv, ContentDiv } from "./AboutPtcb.style";

// -----------------import images---------------------
import leftside from "../Assets/Images/leftside.jpg";

// ----------------import dialog-----------------------
import ScrollDialog from "./Dialog/PTCB Dialog";

const AboutPtcb = (props) => {
  return (
    <ContainerDiv>
      <ImageDiv>
        <img src={leftside} alt="SideImage" />
      </ImageDiv>

      <ContentDiv>
        <h1>PTCB</h1>
        <span>Pakistan Tourism Corporation Board</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
          dolorem odit, cum expedita optio quos ex repudiandae cupiditate ea
          assumenda error quo fugiat quam id autem temporibus quia animi veniam!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          reprehenderit facere expedita inventore tempore sunt autem voluptatum,
          dolor quam! Quam ipsum expedita, suscipit saepe temporibus fugit
          repudiandae! Doloribus, ex fugit?
        </p>
        <ScrollDialog />
      </ContentDiv>
    </ContainerDiv>
  );
};

export default AboutPtcb;
