import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import "./auth.css";

class RegisterStep2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      id: null,
      password: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState: any) => ({
      modal: !prevState.modal
    }));
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <label color="danger" onClick={this.toggle}>
          Register
        </label>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="p-5 rounded  "
        >
          <ModalBody className="modal-bg">
            <div className="d-flex justify-content-around">
              <p>1 Sign Up</p>
              <p className="font-weight-bold">2 User Details</p>
            </div>
            <div>
              <InputGroup>
                <Input
                  placeholder="City"
                  className="input-register "
                  id="city"
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Street"
                  className="input-register "
                  id="street"
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="First Name"
                  type="text"
                  className="input-register "
                  id="fname"
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder=" Last name"
                  type="text"
                  className="input-register "
                  id="lname"
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Phone Number"
                  type="text"
                  className="input-register "
                  id="phone"
                  onChange={this.handleChange}
                />
              </InputGroup>
              <div className="d-flex justify-content-end">
                <Button className="d-flex justify-content-end">Next</Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default RegisterStep2;
