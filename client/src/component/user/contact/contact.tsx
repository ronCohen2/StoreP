import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
            <div className="rounded m-4 ">
              <form className="contactForm ">
                <h3 className="pt-4 pb-2 text-white d-flex justify-content-center ">
                  Contact Now{" "}
                </h3>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded ml-5 mr-3 p-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="rounded ml-4 mr-2 p-2"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols={57}
                    rows={6}
                    placeholder="youe text.."
                    className="rounded ml-5 mr-4 mt-3 p-2"
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
