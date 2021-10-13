import React, { Component } from "react";
import logo from "../img/logo.svg";

//This component render the Kasa logo
export default class Logo extends Component {
  render() {
    return (
      <div className="logo_container">
        <object className="logo" fill={this.props.fill} type="image/svg+xml" data={logo} alt="Kasa">
          {"Your browser does not support SVG "}
        </object>
      </div>
    );
  }
}
