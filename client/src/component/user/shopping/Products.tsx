import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../../store/action/productAction";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "reactstrap";
import "./Shopping.css";
import Pagination from "./Pagination";

class Products extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: 1,
      ProductPerPage: 6
    };
  }
  componentWillMount() {
    this.props.getAllProduct();
  }
  setCurrentPage = (page: Number) => {
    this.setState({
      currentPage: page
    });
  };
  render() {
    const { allProducts }: any = this.props.product;
    const { ProductPerPage, currentPage }: any = this.state;

    // Get current posts
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
            <div className="shopProduct ">
              {currentPosts
                ? currentPosts.map((products: Object, key: any) => {
                    return <ProductCard data={products} key={key} />;
                  })
                : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Pagination
            postsPerPage={ProductPerPage}
            totalPosts={allProducts ? allProducts.length - 1 : null}
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
    getAllProduct: () => dispatch(getAllProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
