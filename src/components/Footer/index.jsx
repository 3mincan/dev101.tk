import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="flex-rw">
      <ul className="footer-list-top">
        <li>
          <h2 className="footer-list-header">Address</h2>
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
          <h2 className="footer-list-header">Social</h2>
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
          <h2 className="footer-list-header">Menu</h2>
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
