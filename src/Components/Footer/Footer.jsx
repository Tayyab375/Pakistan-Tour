import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import footerLogo from "./Assets/Images/footer-logo.png";

// ---------------------------styled import----------------------------------
import {
  StyledFooter,
  OfficeDiv,
  ParentDiv,
  CopyRightDiv,
  ContactDiv,
  ImpLinkDiv,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <ParentDiv>
        <img src={footerLogo} alt="logo" />
        <OfficeDiv>
          <h2>Our Branches</h2>
          <hr />
          <h3>Head Office:</h3>
          <p>Location Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <h3>Lahore:</h3>
          <p>Location Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </OfficeDiv>
        <ContactDiv>
          <h2>Contact Us</h2>
          <hr />
          <p>
            Phone number:
            <br />
            +92 000 0000000
            <br />
            <br />
            For general inquiries:
            <br />
            abc@email.com
            <br />
            For Tour inquiries:
            <br />
            def@email.com
          </p>
        </ContactDiv>
        <ImpLinkDiv>
          <h2>Important Links</h2>
          <hr />
          <Link to={"/ptc"}>About PTC</Link>
          <br />
          <Link to={"/Pakistan"}>About Pakistan</Link>
          <br />
          <Link to={"/demo"}>Geo Mapped Sites</Link>
          <br />
          <br />
          <h4>Follow us on:</h4>
          <a
            className="icon"
            href="https://web.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook fill="rgb(13, 141,241)" />
          </a>
          <a
            className="icon"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter fill="white" />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i className="fa fa-instagram" />
            </span>
          </a>
          <a
            className="icon"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube fill="rgb(218, 39, 30)" />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin fill="rgb(0, 115, 176)" />
          </a>
        </ImpLinkDiv>
      </ParentDiv>
      <CopyRightDiv>
        <p>©2022 PTC. Clone Website.</p>
      </CopyRightDiv>
    </StyledFooter>
  );
};

export default Footer;
