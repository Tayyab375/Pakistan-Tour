import React from "react";

// ------------import styling------------------------
import {
  VisionContentDiv,
  MissionContentDiv,
  VisionMissionParentDiv,
} from "./VisionMission.styled";

const VisionMission = () => {
  return (
    <VisionMissionParentDiv>
      <VisionContentDiv>
        <h1>Vision:</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          quidem, quis architecto rem eius asperiores error earum repudiandae
          nemo vero tempore placeat quaerat molestiae eaque id porro! Velit,
          vero sint?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus, rerum quo deserunt delectus architecto.
        </p>
      </VisionContentDiv>

      <MissionContentDiv>
        <h1>Mission:</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          quidem, quis architecto rem eius asperiores error earum repudiandae
          nemo vero tempore placeat quaerat molestiae eaque id porro! Velit,
          vero sint?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus, rerum quo deserunt delectus architecto, ad obcaecati
          excepturi earum quis aliquam dicta alias qui. Unde laudantium aut,
          ipsa aperiam fugiat qui.
        </p>
      </MissionContentDiv>
    </VisionMissionParentDiv>
  );
};

export default VisionMission;
