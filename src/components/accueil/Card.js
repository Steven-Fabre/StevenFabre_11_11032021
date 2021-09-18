import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cards extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: `/accommodation&id=${this.props.accommodation.id}`,
          state: {
            key: this.props.accommodation.id,
          },
        }}
        className="card_container"
      >
        <img className="cover" alt={this.props.accommodation.description} src={this.props.accommodation.cover}></img>
        <p className="card_description">{this.props.accommodation.title}</p>
      </Link>
    );
  }
}
