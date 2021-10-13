import React, { Component } from "react";
import "./carousel.css";

//This component is rendering the Carousel for pictures in accommodation
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.state = {
      count: 0,
      length: this.props.pictures.length,
    };
  }
  // On each image i have an attached key who is the index, and the buttons will iterate between the array of images
  nextSlide() {
    if (this.state.count === this.state.length - 1) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }

  prevSlide() {
    if (this.state.count === 0) {
      this.setState({ count: this.state.length - 1 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div className="carousel_container">
        <button onClick={() => this.prevSlide()} className="left_arrow"></button>
        {this.props.pictures.map((picture, index) => {
          return (
            // Avoid useless DIV with React.Fragment
            <React.Fragment key={index}>
              {index === this.state.count && <img className="picture" src={picture} alt="" />}{" "}
            </React.Fragment>
          );
        })}
        <button onClick={() => this.nextSlide()} className="right_arrow"></button>
      </div>
    );
  }
}
