import React, { Component } from "react";
import { Button, Modal, ModalBody, Input, InputGroup } from "reactstrap";
import "./auth.css";
import { connect } from "react-redux";
import { login } from "../../store/action/authAction";
import { GetCartStatus, getCartItems } from "../../store/action/cartAction";
import CartStatus from "./CartStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
  handleSubmit = async (id: Number, password: any) => {
    await this.props.login(id, password);
  };

  render() {
    const { id, password } = this.state;
    const { loginErr, userConnected } = this.props.auth;

    let userco = async () => {
      if (userConnected) {
        console.log("asad");
        const { _id } = this.props.auth.user;
        await this.props.getStatus(this.props.auth.user._id);
        await this.props.getCartItems(this.props.cart.cartId);
        // this.toggle();
      }
    };
    return (
      <div>
        <label color="danger" onClick={this.toggle} className="pr-4">
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
                <p className="to-center text-white mt-3">{loginErr}</p>
              ) : null}
              <button
                color="primary"
                className="button-modal "
                onClick={async () => {
                  await this.handleSubmit(id, password);
                  userco();
                }}
              >
                Login
              </button>
              <button
                color="secondary"
                className="button-modal "
                onClick={e => {
                  // this.toggle();
                  // this.props.clearErr();
                }}
              >
                Cancel
              </button>
            </div>
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
    login: (id: Number, password: any) => dispatch(login(id, password)),
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
)(Login);
