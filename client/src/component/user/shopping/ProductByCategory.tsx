import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory
} from "../../../store/action/productAction";
import ProductCard from "./ProductCard";
import { Container } from "reactstrap";
import { RouteProps, Redirect } from "react-router";

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
    const { productsByCategory }: any = this.props.product;
    const { err }: any = this.props.product;
    return (
      <Container>
        <div className="shopProduct ">
          {productsByCategory
            ? productsByCategory.map((products: Object, key: any) => {
                return <ProductCard data={products} key={key} />;
              })
            : null}
        </div>
      </Container>
    );
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
