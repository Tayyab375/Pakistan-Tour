import styled from "styled-components";

export const PraentDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 90%;
  margin: auto;
  border-radius: 15px;
  padding: 5px 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  & .next-btn,
  .prev-btn {
    background: white;
    border-radius: 100%;
    position: absolute;
    box-shadow: 0px 0px 10px 1px black;
    z-index: 2;
    opacity: 0.6;
    transition: 1 ease;
  }

  & .next-btn:hover,
  .prev-btn:hover {
    opacity: 1;
  }

  & .next-btn {
    right: 0;
  }

  & .prev-btn {
    left: 0;
  }
`;

export const CardSliderDiv = styled.div`
  width: 100%;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  scrollbar-width: none;
  margin: auto;
  padding: 5px 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;
