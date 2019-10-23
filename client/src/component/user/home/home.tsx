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
        <img src={Slider} className="HomeBanner" />
        <CategoryHome id="5d5bd6960a5a7d1ab05da2cf" />
        <CategoryHome id="5d5bd6e10a5a7d1ab05da2d0" />
      </Container>
    );
  }
}

export default home;
