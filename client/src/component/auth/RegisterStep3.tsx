import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  Button,
  Form
} from "reactstrap";
import { connect } from "react-redux";

class RegisterStep3 extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
  };
  render() {
    return (
      <Container className="border mt-4 ">
        <Form onSubmit={this.handleSubmit}>
          <h3>Enter the code from your SMS</h3>
          <div>
            let us know this phone number is belongs to you .Enter the code in
            the SMS sent to [phone number here]
          </div>
          <InputGroup>
            <Input
              placeholder="PIN"
              type="text"
              className="input-register "
              id="pin"
              onChange={this.handleChange}
              required
            />
          </InputGroup>
          <Button>Confirm</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};
const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterStep3);
