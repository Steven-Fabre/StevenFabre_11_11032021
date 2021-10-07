//Carousel for pictures in accommodation

import React, { Component } from "react";
import "./carousel.css";

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

  nextSlide() {
    this.setState(() => {
      if (this.state.count === this.state.length - 1) {
        this.setState({ count: 0 });
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    });
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
            <div key={index}>{index === this.state.count && <img className="picture" src={picture} alt="" />}</div>
          );
        })}
        <button onClick={() => this.nextSlide()} className="right_arrow"></button>
      </div>
    );
  }
}
