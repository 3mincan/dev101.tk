import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <ul>
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
    </div>
  );
};

export default Admin;
