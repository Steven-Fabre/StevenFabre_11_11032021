import React, { Component } from "react";
import Section1 from "./Section1";
import Gallery from "./Gallery";
import "./accueil.css";

export default class Accueil extends Component {
  render() {
    return (
      <div className="accueil">
        <Section1 />
        <Gallery />
      </div>
    );
  }
}
