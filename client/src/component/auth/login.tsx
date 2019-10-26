import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  InputGroup,
  ModalHeader,
  Form,
  Alert
} from "reactstrap";
import "./auth.css";
import { connect } from "react-redux";
import { login } from "../../store/action/authAction";
import { GetCartStatus, getCartItems } from "../../store/action/cartAction";
import { withRouter } from "react-router";

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
  handleSubmit = async (e: any, id: Number, password: any) => {
    e.preventDefault();
    const promise = new Promise(reslove => {
      reslove(this.props.login(id, password, this.toRegister));
    }).then(() => {});
  };
  toRegister = () => {
    this.props.history.push("/register");
  };
  render() {
    const { id, password } = this.state;
    const { loginErr, userConnected } = this.props.auth;
    return (
      <div>
        <label color="danger" onClick={this.toggle} className="pr-4 ">
          Login
        </label>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="p-5 rounded  "
        >
          <ModalBody className="modal-bg">
            <Form onSubmit={e => this.handleSubmit(e, id, password)}>
              <div className="d-flex justify-content-end ">
                <i
                  onClick={() => {
                    this.toggle();
                    this.props.clearErr();
                  }}
                  className="far fa-times-circle fa-2x"
                ></i>
              </div>
              <h3 className="d-flex justify-content-center text-white">
                Login
              </h3>
              <div className="ModalPadding">
                <InputGroup>
                  <Input
                    placeholder="username"
                    className="input-login mb-4"
                    id="id"
                    required
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type="password"
                    className="input-login"
                    id="password"
                    required
                    onChange={this.handleChange}
                  />
                </InputGroup>
                {loginErr ? (
                  <Alert color="dark" className="mt-3">
                    {loginErr}
                  </Alert>
                ) : null}
                <button color="primary" className="button-modal ">
                  Login
                </button>
                <button
                  color="secondary"
                  className="button-modal "
                  onClick={e => {
                    this.props.clearErr();
                    this.toggle();
                    this.props.clearErr();
                  }}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (id: Number, password: any, toRegister: any) =>
      dispatch(login(id, password, toRegister)),
    clearErr: () => dispatch({ type: "CLEAR_LOGIN_ERR" }),
    getStatus: (UserId: String) => {
      dispatch(GetCartStatus(UserId));
    },
    getCartItems: (cartId: String) => dispatch(getCartItems(cartId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
