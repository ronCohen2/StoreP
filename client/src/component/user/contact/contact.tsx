import React, { Component } from "react";
import { Container, Row, Col, Input } from "reactstrap";
import { connect } from "react-redux";

class contact extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="banner">
        <Row>
          <Col sm="12" md="5">
            <div className="p-4">
              <p>
                Address :<span className="ml-5">Isreal , Tel aviv</span>
              </p>
              <p>
                Email :<span className="ml-5">RonC665@gmail.com</span>
              </p>
              <p>
                Phone :<span className="ml-5">054-336-9400</span>
              </p>
            </div>
          </Col>
          <Col sm="12" md="7">
            <div className="contactForm ">
              <form>
                <h3 className="pt-4 pb-2 text-white d-flex justify-content-center ">
                  Contact Now{" "}
                </h3>
                <input
                  type="text"
                  placeholder="Name"
                  className="inputContact "
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="inputContact"
                  required
                />
                <div>
                  <textarea
                    name=""
                    id=""
                    cols={57}
                    rows={6}
                    placeholder="youe text.."
                    className="rounded "
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className=" rounded ml-5 mt-3 mb-4"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Row>
          <div />
        </Row>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatc: any) => {};
export default connect(
  null,
  mapDispatchToProps
)(contact);
