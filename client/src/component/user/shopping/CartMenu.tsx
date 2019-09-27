import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import { Table, Row, Col, Container, Button } from "reactstrap";
import itemDetails from "./itemDetails";
import {
  deleteCartItem,
  removeCartItems
} from "../../../store/action/cartAction";
import { withRouter, Redirect } from "react-router";
import { compose } from "redux";
class Slide extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      total: 0
    };
  }
  showSettings(event: any) {
    event.preventDefault();
  }

  addToTotalPrice = (price: Number) => {
    this.setState({
      total: this.state.total + price
    });
  };
  render() {
    const { items } = this.props;
    const { userConnected } = this.props.auth;
    const { cartId } = this.props.cart;
    return (
      <>
        {userConnected ? (
          <Menu right width={"25%"} noOverlay className="">
            <h1>My Cart</h1>
            <Button
              className="clearCart"
              onClick={() => {
                this.props.removeCartItems(cartId);
              }}
            >
              Clear Cart
            </Button>
            <Button
              onClick={() => {
                this.props.history.push("/order");
              }}
            >
              Order
            </Button>
            {items
              ? items.map((item: any, key: any) => {
                  return (
                    <div key={key}>
                      <span>{key + 1} )</span>
                      <span className="pr-4">{item.name}</span>
                      <span className="pr-4">{item.quantity}</span>
                      <span className="pr-4">{item.totalPrice}</span>

                      <span
                        className="pr-4"
                        onClick={() =>
                          this.props.deleteItem(cartId, item.product)
                        }
                      >
                        X
                      </span>
                    </div>
                  );
                })
              : null}
            <label htmlFor="">{this.state.total}</label>
          </Menu>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
    items: state.cart.items,
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteItem: (cartId: String, productId: String) =>
      dispatch(deleteCartItem(cartId, productId)),
    removeCartItems: (cartId: String) => dispatch(removeCartItems(cartId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Slide));
