import React, { useState } from "react";
import { Link } from "react-router-dom";

//import "./Navbar.css";
import { StyledNav } from "./Navbar.styled.js";
import { LogoLink } from "./Navbar.styled.js";
import { NavUnorderList } from "./Navbar.styled.js";
import { StyledSignUpli } from "./Navbar.styled.js";
import { ToggleIconDiv } from "./Navbar.styled.js";

import logo from "./Assets/Images/nav-logo.png";

function Navbar() {
  const [click, setIcon] = useState(false);
  const navIconChange = () => {
    setIcon(!click);
  };

  return (
    <>
      <StyledNav>
        <LogoLink to={"/ptc"}>
          <img src={logo} alt="logo" />
          <h4>Pakistan Tourism Corporation</h4>
        </LogoLink>
        <NavUnorderList className={click ? "nav_active" : null}>
          <li>
            <Link to={"/"} onClick={navIconChange}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/Pakistan"} onClick={navIconChange}>
              Pakistan
            </Link>
          </li>
          <li>
            <Link to={"/ptc"} onClick={navIconChange}>
              PTC
            </Link>
          </li>
          <li>
            <Link to={"/destinations"} onClick={navIconChange}>
              Destinations
            </Link>
          </li>
          <li>
            <Link to={"/hotels"} onClick={navIconChange}>
              Hotels
            </Link>
          </li>
          <StyledSignUpli>
            <Link to={"/log-in"} className="signup" onClick={navIconChange}>
              Log in
            </Link>
          </StyledSignUpli>
        </NavUnorderList>
        <ToggleIconDiv onClick={navIconChange} className="nav_toggler">
          <i className={click ? " fa-solid fa-xmark " : "fa-solid fa-bars"} />
        </ToggleIconDiv>
      </StyledNav>
    </>
  );
}

export default Navbar;
