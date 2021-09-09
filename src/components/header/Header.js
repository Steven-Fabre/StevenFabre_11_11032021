import React, { Component } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul className="navbar">
          <NavLink exact activeClassName="current" className="nav-btn" to="/">
            <li className="nav-li">Accueil</li>
          </NavLink>
          <NavLink exact activeClassName="current" className="nav-btn" to="/about">
            <li className="nav-li">A Propos</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
