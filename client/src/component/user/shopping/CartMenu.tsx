// @ts-ignore

import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
// const Menu = require("react-burger-menu");
import { connect } from "react-redux";
import { Table, Row, Col, Container, Button, CardSubtitle } from "reactstrap";
import itemDetails from "./itemDetails";
import {
  deleteCartItem,
  removeCartItems
} from "../../../store/action/cartAction";
import { withRouter, Redirect } from "react-router";
import { compose } from "redux";
import { Card, CardTitle, CardText } from "reactstrap";

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

  render() {
    const { items } = this.props;
    const { userConnected } = this.props.auth;
    const { cartId, totalPrice } = this.props.cart;
    return (
      <div>
        {userConnected && this.props.auth.user.role === false ? (
          <Menu
            right
            width={"25%"}
            noOverlay
            customBurgerIcon={
              <img src="https://image.flaticon.com/icons/png/512/34/34627.png" />
            }
          >
            <h1 className="to-center">My Cart</h1>
            <Button
              className="ClearButton"
              onClick={() => {
                this.props.removeCartItems(cartId);
              }}
            >
              Clear Cart
            </Button>
            <Button
              className="orderButton"
              onClick={() => {
                this.props.history.push("/order");
              }}
            >
              Order
            </Button>
            <div className="CartItems">
              {items
                ? items.map((item: any, key: any) => {
                    return (
                      <div className=" mb-2" key={key}>
                        <Card body className="cardBg">
                          <CardTitle>
                            {key + 1} ){item.name} {item.quantity},
                            {item.totalPrice}₪
                            <i
                              onClick={() =>
                                this.props.deleteItem(cartId, item.product)
                              }
                              className="fas fa-times "
                            ></i>
                          </CardTitle>
                        </Card>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="totalPriceLabel">
              <label>Total Price :{totalPrice}</label>
            </div>
          </Menu>
        ) : null}
      </div>
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
