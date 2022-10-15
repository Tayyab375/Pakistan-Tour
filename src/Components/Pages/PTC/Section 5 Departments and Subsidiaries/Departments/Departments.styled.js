import styled from "styled-components";
import { drakGreen, green, white } from "../../../../Reusable/Colors";

export const DepartmentParentDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  h1 {
    color: ${drakGreen};
    margin-bottom: 1.5%;
  }
`;

export const ContentDiv = styled.div`
  background-color: ${green};
  padding: 2% 4%;
  height: 400px;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 15px;

  h3 {
    color: ${white};
    margin-bottom: 1.6%;
  }

  p {
    color: ${white};
    font-size: 15px;
    margin-bottom: 1.6%;
  }

  ul {
    margin: 0% 0% 2% 8%;
  }

  li {
    color: ${white};
  }
`;
