import React, { Component } from "react";
import {
  Alert,
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
  Row
} from "reactstrap";
class DashBoard extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col>
            <Card body inverse color="info">
              <CardTitle>
                <i className="fas fa-users fa-5x"></i>User 400
              </CardTitle>
            </Card>
          </Col>
          <Col>
            <Card body inverse color="warning">
              <CardTitle>
                <i className="fas fa-cubes fa-5x"></i>Product 40
              </CardTitle>
            </Card>
          </Col>
          <Col>
            <Card body inverse color="danger">
              <CardTitle>
                <i className="fas fa-cart-plus fa-5x"></i> Order 2341
              </CardTitle>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashBoard;
