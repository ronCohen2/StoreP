import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory
} from "../../../store/action/productAction";
import ProductCard from "./ProductCard";
import { Container } from "reactstrap";
import { RouteProps, Redirect, withRouter } from "react-router";
import "./Shopping.css";
class ProductByCategory extends Component<any & RouteProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps() {
    this.props.getProduct(this.props.match.params.id);
  }
  render() {
    const { allProducts }: any = this.props.product;
    const { err }: any = this.props.product;
    return (
      <Container>
        <div className="shopProduct ">
          {allProducts
            ? allProducts.map((products: Object, key: any) => {
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
)(withRouter(ProductByCategory));
