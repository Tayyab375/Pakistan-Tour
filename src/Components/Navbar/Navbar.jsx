import React, { useState } from "react";
import { Link } from "react-router-dom";

// styling
import {
  StyledNav,
  LogoLink,
  NavUnorderList,
  ToggleIconDiv,
} from "./Navbar.styled.js";

//imgs
import logo from "./Assets/Images/nav-logo.png";

// link array
import { link } from "./link.js";

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
          {link.map((items, index) => {
            return (
              <li className={index === 5 ? "login" : null} key={index}>
                <Link
                  to={items.path}
                  onClick={navIconChange}
                  className={
                    window.location.pathname === items.path && index !== 5
                      ? "active"
                      : window.location.pathname === "/log-in"
                      ? null
                      : null
                  }
                >
                  {items.link}
                </Link>
              </li>
            );
          })}
        </NavUnorderList>
        <ToggleIconDiv onClick={navIconChange} className="nav_toggler">
          <i className={click ? " fa-solid fa-xmark " : "fa-solid fa-bars"} />
        </ToggleIconDiv>
      </StyledNav>
    </>
  );
}

export default Navbar;
