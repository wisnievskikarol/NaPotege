import React from "react";
import Container from "@mui/material/Container";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import Exit from "../assets/exit.svg";
const Nav = () => {
  return (
    <nav className="nav">
      <Container maxWidth="xl">
        <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
        <label htmlFor="nav__checkbox" className="nav__toggle">
          <img src={Hamburger} className="hamburger" />
          <img src={Exit} className="close" />
        </label>

        <ul className="nav__menu">
          <li>
            <a href="#">
              <img className="logo" src={Logo} alt={"Logo"} />
            </a>
          </li>
          <li>
            <a href="#">Idea</a>
          </li>
          <li>
            <a href="#">Miejsce</a>
          </li>
          <li>
            <a href="#">Najbliższe spotkanie</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
