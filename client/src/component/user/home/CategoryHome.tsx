import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getProductsByCategory } from "../../../store/action/productAction";
import "./home";
import ProductCard from "./ProductCard";
class CategoryHome extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id }: any = this.props;
    console.log(id);
    this.props.getProductByCategory(id);
  }
  render() {
    const { productsByCategory }: any = this.props.product;
    console.log(productsByCategory);
    return (
      <Container className="mt-4">
        <h2>Electronic Products</h2>
        <Row className="cat rounded">
          <Col sm="12" md="4">
            <img
              src="https://www.luzuk.com/demo/supermarket-ecommerce/wp-content/themes/supermarket-ecommerce-pro/images/ecatprobanner.jpg"
              className="CatyegoryImg"
            />
          </Col>
          <Col sm="12" md="8">
            {productsByCategory
              ? productsByCategory.map((product: any, index: Number) => {
                  return (
                    <Col md="4" className="float-left mt-3">
                      <ProductCard
                        img={product.image}
                        name={product.productName}
                        price={product.price}
                      />
                    </Col>
                  );
                })
              : null}
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
    getProductByCategory: (id: String) => dispatch(getProductsByCategory(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHome);
