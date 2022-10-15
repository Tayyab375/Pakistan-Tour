import { Link } from "react-router-dom";
import styled from "styled-components";

import { green } from "../Reusable/Colors";
import { white } from "../Reusable/Colors";
import { lightGreen } from "../Reusable/Colors";
import { drakBlue } from "../Reusable/Colors";

export const StyledNav = styled.nav`
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  background-color: ${green};
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  img {
    height: 22px;
  }

  h4 {
    color: ${white};
    margin-left: 10px;
    font-weight: 500;
    font-size: 1.15rem;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

export const NavUnorderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    position: fixed;
    z-index: 10000;
    top: 0vh;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(40, 167, 69);
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    padding: 150px 0;
    font-size: 2rem;

    &.nav_active {
      transform: translateX(0%);
    }
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${white};
    transition: 0.3s ease-in;

    :hover {
      color: ${lightGreen};
      border-bottom: 3px solid ${lightGreen};
    }
  }
`;

export const StyledSignUpli = styled.li`
  a {
    color: ${drakBlue};

    :hover {
      color: ${white};
      border-bottom: 3px solid ${white};
    }
  }
`;

export const ToggleIconDiv = styled.div`
  display: none;
  z-index: 20000;

  @media screen and (max-width: 1000px) {
    display: block;
  }

  i {
    font-size: 25px;
    color: ${white};
  }
`;
