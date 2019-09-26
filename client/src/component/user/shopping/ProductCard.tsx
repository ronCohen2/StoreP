import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";
import { Route, Redirect, withRouter } from "react-router";
import { connect } from "react-redux";
import { addCartItem } from "../../../store/action/cartAction";
import Login from "../../auth/Login";

const ProductCard = withRouter((props: any) => {
  const { history }: any = props;
  const { cartId } = props.cart;
  const { _id, productName } = props.data;
  const { userConnected } = props.auth;
  return (
    <div>
      <Col md="3" className="productCard2 ">
        <Card className="productCard2 rounded">
          <CardImg top width="100%" height="100%" src={props.data.image} />
          <CardTitle>{props.data.productName}</CardTitle>
          <CardSubtitle>{props.data.price}</CardSubtitle>
          <Button
            onClick={() => {
              userConnected
                ? props.addToCart(cartId, _id, 1, productName)
                : alert("You need to log in ");
            }}
          >
            Add To Cart
          </Button>
          <Button
            onClick={() => {
              history.push(`/itemDetails/${props.data._id}`);
            }}
          >
            More Info
          </Button>
        </Card>
      </Col>
    </div>
  );
});
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart,
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (
      cartId: String,
      productId: String,
      quantity: Number,
      name: String
    ) => dispatch(addCartItem(cartId, productId, quantity, name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
