import React, { Component } from "react";
import star from "../../img/star.svg";
import "./accommodation.css";

export default class Rating extends Component {
  render() {
    return (
      <object className="rating" fill={this.props.fill} type="image/svg+xml" data={star} alt="star">
        {"Your browser does not support SVG "}
      </object>
    );
  }
}
