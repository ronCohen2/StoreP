import React, { Component } from "react";
import { connect } from "react-redux";
import { searchProducts } from "../../store/action/productAction";
import ProductCard from "../user/shopping/ProductCard";
import { Container, Row, Col } from "reactstrap";
import "../auth/auth.css";
class Search extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.searchProduct(this.props.match.params.product);
  }
  componentWillReceiveProps(NextProps: any) {
    const { product } = this.props.match.params;
    if (product !== NextProps.match.params.product) {
      this.props.searchProduct(NextProps.match.params.product);
    }
  }
  render() {
    const { search } = this.props.product;
    return (
      <Container>
        <Row className="mt-4 mb-4 ">
          <Col>
            {search ? (
              search.map((product: any, key: any) => {
                return <ProductCard data={product} key={key} />;
              })
            ) : (
              <Col className="to-center">
                <img
                  className="SearchNotFound "
                  src="https://cdn1.iconfinder.com/data/icons/lined-files-and-documents-vol-1/512/File_and_Document_missing_file-512.png"
                />
              </Col>
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
