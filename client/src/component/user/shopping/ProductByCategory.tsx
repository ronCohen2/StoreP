import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory
} from "../../../store/action/productAction";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "reactstrap";
import { RouteProps, Redirect, withRouter } from "react-router";
import "./Shopping.css";
import Pagination from "./Pagination";

class ProductByCategory extends Component<any & RouteProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: 1,
      ProductPerPage: 8,
      currentPost: null
    };
  }
  componentDidMount() {
    this.renderByProps(this.props.match.params.id);
  }
  componentWillReceiveProps(NextProps: any) {
    if (this.props.match.params.id !== NextProps.match.params.id) {
      this.renderByProps(NextProps.match.params.id);
      this.setCurrentPage(1);
    }
  }
  setCurrentPage = (page: Number) => {
    this.setState({
      currentPage: page
    });
  };

  renderByProps = (propsId: String) => {
    switch (propsId) {
      case "all":
        this.props.getAllProduct();
      default:
        this.props.getProduct(propsId);
    }
  };

  render() {
    const { allProducts }: any = this.props.product;
    const { ProductPerPage, currentPage }: any = this.state;
    if (allProducts) {
      const indexOfLastPost = currentPage * ProductPerPage;
      const indexOfFirstPost = indexOfLastPost - ProductPerPage;
      var currentPosts = allProducts.slice(indexOfFirstPost, indexOfLastPost);
    }

    // Change page
    const paginate = (pageNumber: Number) => this.setCurrentPage(pageNumber);
    return (
      <Container>
        <Row>
          <Col>
            {currentPosts
              ? currentPosts.map((products: Object, key: any) => {
                  return <ProductCard data={products} key={key} />;
                })
              : null}
          </Col>
        </Row>
        <Row>
          <Pagination
            postsPerPage={ProductPerPage}
            totalPosts={allProducts ? allProducts.length : null}
            paginate={paginate}
          />
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
    getProduct: (id: String) => dispatch(getProductsByCategory(id)),
    getAllProduct: () => dispatch(getAllProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductByCategory));
