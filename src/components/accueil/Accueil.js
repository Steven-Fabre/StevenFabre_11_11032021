import React, { Component } from "react";
import Section1 from "./Section1";
import "./accueil.css";
import Accommodations from "../accommodation/Accommodations";

//This component is view of the Home page
export default class Accueil extends Component {
  render() {
    return (
      <div className="accueil">
        <Section1 />
        <Accommodations />
      </div>
    );
  }
}
