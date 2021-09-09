import React, { Component } from "react";
import landscape from "../../img/landscape.png";

export default class Logo extends Component {
  render() {
    return (
      <div className="section1_container">
        <img className="section1" src={landscape} alt="landscape" />
      </div>
    );
  }
}
