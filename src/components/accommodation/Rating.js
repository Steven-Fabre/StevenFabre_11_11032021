import React, { Component } from "react";
import { ReactComponent as Star } from "../../img/star.svg";
import "./accommodation.css";

export default class Rating extends Component {
  render() {
    let rating = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= this.props.rating) {
        rating.push(<Star fill="#FF6060" className="filled_star" />);
      } else {
        rating.push(<Star fill="#E3E3E3" className="empty_star" />);
      }
    }

    return <div className="accomodation_rating">{rating}</div>;
  }
}