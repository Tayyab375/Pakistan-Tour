import React from "react";

// ------------import styling------------------------
import { ContentDiv, ImgDiv, ManagementParentDiv } from "./Management.styled";

import sideImg from "./Assets/Images/sideimg.jpg";

const Management = () => {
  return (
    <ManagementParentDiv>
      <ContentDiv>
        <h1>Management:</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          quidem, quis architecto rem eius asperiores error earum repudiandae
          nemo vero tempore placeat quaerat molestiae eaque id porro! Velit,
          vero sint?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus, rerum quo deserunt delectus architecto, ad obcaecati
          excepturi earum quis aliquam dicta alias qui. Unde laudantium aut,
          ipsa aperiam fugiat qui.
        </p>
      </ContentDiv>

      <ImgDiv>
        <img src={sideImg} alt="" />
      </ImgDiv>
    </ManagementParentDiv>
  );
};

export default Management;
