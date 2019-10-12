import React, { Component } from "react";
import AddCategory from "./AddCategory";
import AddProductAdmin from "./AddProductAdmin";
import ContactMessage from "./ContactMessage";
import { Row, Col, Container } from "reactstrap";
class dashbord extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <AddCategory />
          </Col>
          <Col>
            <AddProductAdmin />
          </Col>
          <Col>
            <ContactMessage />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default dashbord;
