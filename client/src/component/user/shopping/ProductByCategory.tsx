import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory
} from "../../../store/action/productAction";
import ProductCard from "./ProductCard";
import { Container } from "reactstrap";
import { RouteProps } from "react-router";

import "./Shopping.css";
class ProductByCategory extends Component<any & RouteProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id }: any = this.props;
    this.props.getProduct(id);
  }
  render() {
    // const { allProducts }: any = this.props.product;
    console.log(this.props);
    return <Container />;
  }
}
const mapStateToProps = (state: any) => {
  return {
    product: state.product
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getProduct: (id: String) => dispatch(getProductsByCategory(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductByCategory);
