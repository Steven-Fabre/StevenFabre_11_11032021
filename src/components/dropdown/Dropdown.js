//Dropdown for informations

import React, { Component } from "react";
import "./dropdown.css";
import arrow from "../../img/arrow.svg";

export default class Dropdown extends Component {
  showDropdown(e) {
    e.target.closest("div").children[1].classList.toggle("dropdown_arrow_hidden");
    e.target.closest("div").children[2].classList.toggle("dropdown_hidden");
  }

  render() {
    return (
      <div className="dropdown_container" onClick={this.showDropdown}>
        <h2 className="dropdown_title">{this.props.title}</h2>
        <object className="dropdown_arrow dropdown_arrow_hidden" type="image/svg+xml" data={arrow} alt="dropdown_arrow">
          {"Your browser does not support SVG "}
        </object>
        <p className={this.props.className + " dropdown_hidden"}>{this.props.description}</p>
      </div>
    );
  }
}
