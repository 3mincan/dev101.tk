import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="flex-rw">
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">Office</h4>
        </li>
        <li>
          <a href="#" itemProp="significantLink">
            Address
          </a>
        </li>
        <li>
          <a href="#" itemProp="significantLink">
            Phone
          </a>
        </li>
        <li>
          <a href="#" itemProp="significantLink">
            etc
          </a>
        </li>
      </ul>
      <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">Social</h4>
        </li>

        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      <ul className="footer-list-top">
        <li id="help">
          <h4 className="footer-list-header">Menu</h4>
        </li>

        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/login">Services</Link>
        </li>
        <li>
          <Link to="/reset">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
