import React from "react";
import { Container, Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col sm="1" />
        <Col sm="4">
          <h4>ABOUT US</h4>
          <p className="p-2">
            There are many variations of passages of Lorem Ipsum available, but
            There are many variations of passages of Lorem Ipsum available, but
          </p>
        </Col>
        <Col sm="3">
          <h4>QUICK LINKS</h4>
          <p>Home</p>
          <p>Shoping cart</p>
          <p>Shop</p>
          <p>Contact</p>
        </Col>
        <Col sm="3">
          <h4>FOLLOW US</h4>
          <p>Facebook</p>
          <p>Instegram</p>
          <p>Twiter</p>
        </Col>
        <Col sm="1" />
      </Row>
    </div>
  );
};

export default Footer;
