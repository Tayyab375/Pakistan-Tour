import React from "react";

import { ParentDiv, AboutPakistanDiv, VideoDiv } from "./AboutPakistan.styled";

import video from "./Assets/Videos/Pakistan Tour.mp4";

import ScrollDialog from "./Dialog/Dialog";

const AboutPakistan = () => {
  return (
    <ParentDiv>
      <AboutPakistanDiv>
        <h1>Pakistan:</h1>
        <p>
          Pakistan, officially the Islamic Republic of Pakistan, is a country in
          South Asia. It is the world's fifth-most populous country, with a
          population of almost 242 million, and has the world's second-largest
          Muslim population. Pakistan is the 33rd-largest country by area,
          spanning 881,913 square kilometres (340,509 square miles). It has a
          1,046-kilometre (650-mile) coastline along the Arabian Sea and Gulf of
          Oman in the south, and is bordered by India to the east, Afghanistan
          to the west, Iran to the southwest, and China to the northeast. It is
          separated narrowly from Tajikistan by Afghanistan's Wakhan Corridor in
          the north, and also shares a maritime border with Oman.
        </p>
        <ScrollDialog />
      </AboutPakistanDiv>

      <VideoDiv>
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </VideoDiv>
    </ParentDiv>
  );
};

export default AboutPakistan;
