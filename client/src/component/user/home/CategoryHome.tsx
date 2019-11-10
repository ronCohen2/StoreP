import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProductsByCategory } from "../../../store/action/productAction";
import "./home";
import ProductCard from "./ProductCard";
import { withRouter } from "react-router-dom";
import Axios from "axios";

class CategoryHome extends Component<p, S> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: [],
      categoryName: "",
      image: ""
    };
  }
  async componentWillMount() {
    const { id } = this.props;
    const res = await Axios.get(
      `http://localhost:3001/Products/category/${id}`
    );
    let { products } = res.data;
    if (products.length > 6) {
      products = products.slice(0, 6);
    }
    this.setState({
      product: products,
      categoryName: res.data.category[0].categoryName,
      image: res.data.category[0].image
    });
  }
  render() {
    const { product } = this.state;
    const { categoryName, image } = this.state;
    return (
      <Container className="mt-4">
        <h2>{categoryName} Products</h2>
        <Row className="HomeCategoryContainer border rounded mb-4">
          {image ? (
            <Col sm="12" md="4">
              <img
                src={require(`../../../../../public/image/${image}`)}
                className="CatyegoryImg"
              />
            </Col>
          ) : null}

          <Col sm="12" md="8">
            {product
              ? product.map((product: any, index: Number) => {
                  return (
                    <Col md="4" className="float-left mt-3">
                      <ProductCard
                        img={product.image}
                        name={product.productName}
                        price={product.price}
                        id={product._id}
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
const mapStateToProps = (state: { product: [] }) => {
  return {
    product: state.product
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getProductsByCategory: (id: String) => dispatch(getProductsByCategory(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHome);

interface S {
  product: [];
  categoryName: String;
  image: String;
}
interface p {
  product: [];
  id: String;
}
