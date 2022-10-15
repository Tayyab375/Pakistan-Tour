import styled from "styled-components";

export const ParentContainerDiv = styled.div`
  margin-top: 6%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(249 249 249);

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapDiv = styled.div`
  /* display: flex; */
  display: inline;
`;
