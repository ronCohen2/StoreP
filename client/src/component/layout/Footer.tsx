import React from "react";
import { Container, Col, Row } from "reactstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const Footer = (props: any) => {
  const { history } = props;
  return (
    <div className="footer border-top">
      <Row>
        <Col sm="1" />
        <Col sm="4">
          <h4>ABOUT US</h4>
          <p className="p-2 text-muted">
            There are many variations of passages of Lorem Ipsum available, but
            There are many variations of passages of Lorem Ipsum available, but
          </p>
        </Col>
        <Col sm="3">
          <h4 className="text-black">QUICK LINKS</h4>
          <div className="text-muted">
            <p onClick={() => history.push("/")}>Home</p>
            <p onClick={() => history.push("/shop")}>Shop</p>
            <p onClick={() => history.push("/about")}>about</p>
            <p onClick={() => history.push("/contact")}>Contact</p>
          </div>
        </Col>
        <Col sm="3">
          <h4>FOLLOW US</h4>
          <div>
            <div>
              <a className="text-muted" href="http://www.facebook.com">
                Facebook
              </a>
            </div>
            <div>
              <a className="text-muted" href="http://www.instegram.com">
                Instegram
              </a>
            </div>
            <div>
              <a className="text-muted" href="http://www.twitter.com">
                Twitter
              </a>
            </div>
          </div>
        </Col>
        <Col sm="1" />
      </Row>
    </div>
  );
};

export default withRouter(Footer);
