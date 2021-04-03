import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li id="title">
            <a href="/">
              <h1>Blog</h1>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <h4>Services</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Contact</h4>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
