import React, { Component } from "react";
import { connect } from "react-redux";
import { searchProducts } from "../../store/action/productAction";
import ProductCard from "../user/shopping/ProductCard";
import { Container, Row, Col } from "reactstrap";

class Search extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps() {
    this.props.searchProduct(this.props.match.params.product);
  }
  render() {
    const { search } = this.props.product;
    return (
      <Container>
        <Row>
          <Col>
            {search ? (
              search.map((product: any, key: any) => {
                return <ProductCard data={product} key={key} />;
              })
            ) : (
              <p>Product not found </p>
            )}
          </Col>
        </Row>
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
    searchProduct: (product: String) => dispatch(searchProducts(product))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
