import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { connect } from "react-redux";

class contact extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <Container>
        <Row className="mt-4 mb-4">
          <Col sm="12" md="6" className="border">
            <div>
              <h1 className="to-center m-3">Contact</h1>
              <p>
                Address :<span className="">Isreal , Tel aviv</span>
              </p>
              <p>
                Email :<span className="">RonC665@gmail.com</span>
              </p>
              <p>
                Phone :<span className="">054-336-9400</span>
              </p>
            </div>
          </Col>
          <Col sm="12" md="6">
            <Form className="border">
              <h1 className="to-center m-3">Contact</h1>
              <FormGroup>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  id="text"
                  placeholder="your text.."
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button>Send</Button>
            </Form>
          </Col>
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
