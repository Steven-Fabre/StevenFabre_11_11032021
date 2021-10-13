import React, { Component } from "react";
import { ReactComponent as Star } from "../../img/star.svg";
import "./accommodation.css";

//This component is used by Profil.js for transforming the Rating data in stars
export default class Rating extends Component {
  render() {
    let rating = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= this.props.rating) {
        rating.push(<Star fill="#FF6060" key={Math.random()} className="filled_star" />);
      } else {
        rating.push(<Star fill="#E3E3E3" key={Math.random()} className="empty_star" />);
      }
    }

    return <div className="accommodation_rating">{rating}</div>;
  }
}
