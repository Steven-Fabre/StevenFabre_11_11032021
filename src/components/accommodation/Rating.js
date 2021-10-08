import React, { Component } from "react";
import { ReactComponent as Star } from "../../img/star.svg";
import "./accommodation.css";

export default class Rating extends Component {
  render() {
    let rating = [];
    for (let i = 1; i <= 5; i++) {
      let x = 0;
      if (i <= this.props.rating) {
        rating.push(<Star fill="#FF6060" key={x} className="filled_star" />);
        x++;
      } else {
        rating.push(<Star fill="#E3E3E3" key={x} className="empty_star" />);
        x++;
      }
    }

    return <div className="accomodation_rating">{rating}</div>;
  }
}
