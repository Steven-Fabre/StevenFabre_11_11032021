import React, { Component } from "react";
import Profil from "./Profil";
import Dropdown from "../dropdown/Dropdown";
import "./accommodation.css";
import Carousel from "../carousel/Carousel";
import Error404 from "../error404/Error404";

//This component render each Accommodation fetching the json
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
    return (
      <>
        {housing ? (
          <div className="accommodation">
            <Carousel pictures={housing.pictures} />
            <div className="accommodation_host">
              <div className="accommodation_header">
                <h1 className="accommodation_title">{housing.title}</h1>
                <h2 className="accommodation_location">{housing.location}</h2>
                <div className="accommodation_tags">
                  {housing.tags
                    ? housing.tags.map((tag) => (
                        <p className="accommodation_tag" key={tag}>
                          {tag}
                        </p>
                      ))
                    : ""}
                </div>
              </div>
              <Profil housing={housing} />
            </div>
            <div className="accommodation_dropdowns">
              <Dropdown title="Description" description={housing.description} className="dropdown_accommodation" />
              <Dropdown
                title="Équipements"
                className="dropdown_accommodation"
                description={housing.equipments.map((equipment, index) => {
                  return <li key={index}>{equipment}</li>;
                })}
              />
            </div>
          </div>
        ) : (
          <Error404 />
        )}
      </>
    );
  }
}
