import React from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../../../assistance/img/product.png";
import user from "../../../assistance/img/user.png";
import cart from "../../../assistance/img/cart.png";

export default function StatisticData() {
  return (
    <Container className="banner">
      <Row>
        <Col className="sd">
          <img src={cart} className="StatisticIcom " />
          <h4> 150 Cart</h4>
        </Col>
        <Col className="sd">
          <img src={user} className="StatisticIcom" />
          <h4> 200 users</h4>
        </Col>
        <Col className="sd">
          <img src={products} className="StatisticIcom" />
          <h4> 300 products</h4>
        </Col>
      </Row>
    </Container>
  );
}
