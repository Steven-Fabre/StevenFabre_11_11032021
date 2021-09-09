import React, { Component } from "react";
import logo from "../../img/logo.svg";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo_container">
        <img className="logo" src={logo} alt="Kasa" />
      </div>
    );
  }
}
