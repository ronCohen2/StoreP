import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../../store/action/productAction";
import ProductCard from "./ProductCard";
import { Container } from "reactstrap";
import "./Shopping.css";
class Products extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getAllProduct();
  }
  render() {
    const { allProducts }: any = this.props.product;
    return (
      <div className="shopProduct rounded">
        {allProducts
          ? allProducts.map((products: Object, key: Number) => {
              return <ProductCard data={products} key={key} />;
            })
          : null}
      </div>
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
    getAllProduct: () => dispatch(getAllProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
