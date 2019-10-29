import React, { Component } from "react";
import CategoryHome from "./CategoryHome";
import "./home.css";
import { Container } from "reactstrap";
import Slider from "../../../../src/assistance/img/slider-banner.png";
class home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <img
          src="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg"
          className="HomeBanner"
        />
        <CategoryHome id="5d5bd6960a5a7d1ab05da2cf" />
        <CategoryHome id="5db6a176019ed73b00c81266" />
      </Container>
    );
  }
}

export default home;
