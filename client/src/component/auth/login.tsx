import React, { Component } from "react";
import { Button, Modal, ModalBody, Input, InputGroup } from "reactstrap";
import "./auth.css";
import { connect } from "react-redux";
import { login } from "../../store/action/authAction";

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
  handleSubmit = (id: Number, password: any) => {
    this.props.login(id, password);
    console.log(this.props);
  };

  render() {
    const { id, password } = this.state;
    const { loginErr } = this.props.auth;
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
                  required
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Password"
                  type="password"
                  className="input-login"
                  id="password"
                  onChange={this.handleChange}
                  required
                />
              </InputGroup>
              {loginErr ? (
                <p className="to-center text-white mt-3">{loginErr}</p>
              ) : null}
              <Button
                color="primary"
                className="button-modal "
                onClick={() => this.handleSubmit(id, password)}
              >
                Login
              </Button>
              <Button
                color="secondary"
                className="button-modal "
                onClick={() => {
                  this.toggle();
                  this.props.clearErr();
                }}
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
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (id: Number, password: any) => dispatch(login(id, password)),
    clearErr: () => dispatch({ type: "CLEAR_LOGIN_ERR" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
