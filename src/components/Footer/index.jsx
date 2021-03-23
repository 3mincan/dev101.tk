import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="flex-rw">
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">Menu</h4>
        </li>
        <li>
          <a href="#" itemProp="significantLink">
            ITEM 1
          </a>
        </li>
        <li>
          <a href="#" itemProp="significantLink">
            ITEM 2
          </a>
        </li>
        <li>
          <a href="#" itemProp="significantLink">
            ITEM 3
          </a>
        </li>
      </ul>
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">Menu 2</h4>
        </li>

        <li>
          <a href="#">ITEM 1</a>
        </li>
        <li>
          <a href="#">ITEM 2</a>
        </li>
        <li>
          <a href="#">ITEM 3</a>
        </li>
      </ul>
      <ul className="footer-list-top">
        <li id="help">
          <h4 className="footer-list-header">Admin Area</h4>
        </li>

        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/reset">PASSWORD RESET</Link>
        </li>
        <li>
          <Link to="/dashboard">DASHBOARD</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
