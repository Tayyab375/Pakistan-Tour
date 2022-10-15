import styled from "styled-components";
import { lightGreen } from "../Reusable/Colors";
import footerimg from "./Assets/Images/footer.jpg";

export const StyledFooter = styled.footer`
  margin-top: 5.5%;
  width: 100%;
  background: url(${footerimg});
  background-position: center;
  background-size: cover;

  h2,
  h3,
  p,
  a,
  span {
    color: white;
  }

  h2 {
    @media screen and (max-width: 900px) {
      font-size: 1.15rem;
    }
  }

  h3 {
    @media screen and (max-width: 900px) {
      font-size: 1rem;
    }
  }

  p {
    @media screen and (max-width: 900px) {
      font-size: 0.875rem;
    }
  }

  hr {
    background-color: white;
    border: none;
    height: 3.5px;
    margin-bottom: 15px;
  }
`;

export const ParentDiv = styled.div`
  display: flex;
  gap: 3%;
  padding: 40px 20px 50px 10px;
  justify-content: center;
  /* height: 70vh; */
  /* flex-wrap: wrap; */

  @media screen and (max-width: 950px) {
    padding: 40px 0px 0px 0px;
    gap: 4%;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    height: 15%;
    margin: 70px 5px 0 0px;

    @media screen and (max-width: 1000px) {
      height: 10%;
    }
    @media screen and (max-width: 750px) {
      width: 40%;
    }
  }
`;

export const OfficeDiv = styled.div`
  width: 28%;

  @media screen and (max-width: 900px) {
    width: 23%;
  }

  @media screen and (max-width: 750px) {
    margin-top: 10%;
    width: 60%;
  }

  h3 {
    margin-top: 5px;
  }

  p {
    font-size: 0.95rem;
  }
`;

export const ContactDiv = styled.div`
  width: 20%;

  @media screen and (max-width: 750px) {
    margin-top: 4%;
    width: 60%;
  }

  hr {
    margin-bottom: 20px;
  }
`;

export const ImpLinkDiv = styled.div`
  width: 25%;

  @media screen and (max-width: 900px) {
    width: 20%;
  }

  @media screen and (max-width: 750px) {
    margin-top: 4%;
    width: 60%;
  }

  hr {
    margin-bottom: 20px;
  }

  a {
    line-height: 1.6;
    text-decoration: none;
    transition: 0.7s ease;
    font-weight: 500;

    :hover {
      color: ${lightGreen};
    }
  }

  h4 {
    padding-left: 5px;
    color: ${lightGreen};
  }

  span {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 10px;
    color: #fff;
    font-size: 40px;
    line-height: 40px;
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 900px) {
      width: 30px;
      height: 30px;
      font-size: 30px;
      line-height: 30px;
    }

    & .fa-instagram:before {
      content: "\f16d";
      color: white;
    }
  }

  & .icon {
    font-size: 40px;
    padding-left: 5px;
    color: red;

    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
  }
`;

export const CopyRightDiv = styled.div`
  /* height: 10vh; */
  background-color: black;
  opacity: 0.4;

  p {
    padding: 15px 0px 15px 40px;
    font-weight: 300;
    font-size: 0.95rem;
  }
`;
