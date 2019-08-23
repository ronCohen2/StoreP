import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Filter from "./Filter";
import Products from "./Products";
class shopping extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <Filter />
          </Col>
          <Col md="9">
            <Products />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default shopping;
