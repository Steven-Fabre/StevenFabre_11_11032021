import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./error404.css";

//This component is the view of the Error404 page
export default class Error404 extends Component {
  render() {
    return (
      <div className="error404">
        <h1 className="error">404</h1>
        <h2 className="error_sub">Oups! La page que vous demandez n'existe pas.</h2>

        <NavLink id="backToHome" to="/">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    );
  }
}
