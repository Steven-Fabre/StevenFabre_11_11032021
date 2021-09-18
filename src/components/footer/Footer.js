import React, { Component } from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default class Header extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink to="/">
          <Logo fill="white" className="footer_logo" />
        </NavLink>
        <p className="copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    );
  }
}
