import React, { Component } from "react";
import { Button, Modal, ModalBody, Input, InputGroup } from "reactstrap";
import "./auth.css";
import { connect } from "react-redux";
import { login } from "../../store/action/authAction";
import { GetCartStatus, getCartItems } from "../../store/action/cartAction";

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
    const promise = await this.props.login(id, password);
    if (this.props.auth.userConnected) {
      const { _id: UserId } = this.props.auth.user;
      await this.props.getStatus(UserId);
      await this.props.getCartItems(this.props.cart.cartId);
      await this.toggle();
      setTimeout(() => {
        alert("sdf");
      }, 300);
    }
  };

  render() {
    const { id, password } = this.state;
    const { loginErr, userConnected } = this.props.auth;
    if (userConnected) {
      const UserId = this.props.auth.user._id;
      // this.props.getStatus(UserId);
      // this.toggle();
    }
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
