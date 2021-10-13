import React, { Component } from "react";
import "./accommodation.css";
import Error404 from "../error404/Error404";
import Housing from "./Housing";

//This component render each Accommodation by searching the id in the json
export default class Accommodation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accommodation: null,
    };
  }

  async componentDidMount() {
    fetch("../../logements.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Oops, quelque chose s'est mal passé 😯");
        }
      })
      .then((data) => {
        this.setState({ accommodations: data });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const housing = this.state?.accommodations?.find((el) => el.id === window.location.hash.slice(1));
    return <>{housing ? <Housing housing={housing} /> : <Error404 />}</>;
  }
}
