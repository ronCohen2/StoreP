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
    getAllProduct: () => dispatch(getAllProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
