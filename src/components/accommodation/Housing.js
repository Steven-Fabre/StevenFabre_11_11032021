import React, { Component } from "react";
import Profil from "./Profil";
import Dropdown from "../dropdown/Dropdown";

import Carousel from "../carousel/Carousel";
import "./accommodation.css";

//This component render the Housing in the accommodation
export default class Housing extends Component {
  render() {
    return (
      <div className="accommodation">
        <Carousel pictures={this.props.housing.pictures} />
        <div className="accommodation_host">
          <div className="accommodation_header">
            <h1 className="accommodation_title">{this.props.housing.title}</h1>
            <h2 className="accommodation_location">{this.props.housing.location}</h2>
            <div className="accommodation_tags">
              {this.props.housing.tags
                ? this.props.housing.tags.map((tag) => (
                    <p className="accommodation_tag" key={tag}>
                      {tag}
                    </p>
                  ))
                : ""}
            </div>
          </div>
          <Profil housing={this.props.housing} />
        </div>
        <div className="accommodation_dropdowns">
          <Dropdown
            title="Description"
            description={this.props.housing.description}
            className="dropdown_accommodation"
          />
          <Dropdown
            title="Équipements"
            className="dropdown_accommodation"
            description={this.props.housing.equipments.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
            })}
          />
        </div>
      </div>
    );
  }
}
