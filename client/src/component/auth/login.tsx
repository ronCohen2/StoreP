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

class Login extends React.Component<any, any> {
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
          Login
        </label>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="p-5 rounded  "
        >
          <ModalBody className="modal-bg">
            <h3 className="d-flex justify-content-center">Login</h3>
            <div>
              <InputGroup>
                <Input
                  placeholder="username"
                  className="input-login"
                  id="id"
                  onChange={this.handleChange}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Password"
                  type="password"
                  className="input-login"
                  id="password"
                  onChange={this.handleChange}
                />
              </InputGroup>
              <Button color="primary" className="button-modal ">
                Login{" "}
              </Button>
              <Button
                color="secondary"
                className="button-modal "
                onClick={this.toggle}
              >
                Cancel
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
