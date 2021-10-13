import React, { Component } from "react";
import Rating from "./Rating";
import "./accommodation.css";

//This component render the profil of the host in the accommodation
export default class Profil extends Component {
  render() {
    return (
      <div className="accommodation_profil">
        <div className="accommodation_profil_host">
          <p className="accommodation_profil_host_name">{this.props.housing.host.name}</p>
          <img
            className="accommodation_profil_host_pic"
            src={this.props.housing.host.picture}
            alt={"Photo de " + this.props.housing.host.name}
          ></img>
        </div>
        <Rating rating={this.props.housing.rating} key={this.props.housing.id} />
      </div>
    );
  }
}
