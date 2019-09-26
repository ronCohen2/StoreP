import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import { Table, Row, Col, Container } from "reactstrap";
import itemDetails from "./itemDetails";

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
    return (
      <>
        {userConnected ? (
          <Menu right width={"30%"} noOverlay className="">
            <h1>My Cart</h1>
            {items
              ? items.map((item: any, key: any) => {
                  return (
                    <div key={key}>
                      <span>{key + 1} )</span>
                      <span className="pr-4">{item.name}</span>
                      <span className="pr-4">{item.quantity}</span>
                      <span className="pr-4">X</span>
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
    items: state.cart.items
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slide);
