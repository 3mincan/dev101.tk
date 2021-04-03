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
            <a href="#">Tab </a>
          </li>
          <li>
            <a href="#">Tab </a>
          </li>
          <li>
            <a href="#">Tab </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
