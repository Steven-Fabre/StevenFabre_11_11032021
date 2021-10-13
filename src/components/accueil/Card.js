import React, { Component } from "react";
import { Link } from "react-router-dom";

//This component is used by Accommodations.js for rendering each accommodation in cards
export default class Cards extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: `/accommodation/#${this.props.accommodation.id}`,
          state: {
            accommodation: this.props.accommodation,
            accommodations: this.props.accommodations,
            key: this.props.accommodation.id,
          },
        }}
        className="card_container"
        style={{
          backgroundImage: `url(${this.props.accommodation.cover})`,
        }}
      >
        <p className="card_description">{this.props.accommodation.title}</p>
      </Link>
    );
  }
}
