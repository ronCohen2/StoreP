import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Products from "./Products";
import CategoryList from "./CategoryList";
import { connect } from "react-redux";
import ProductByCategory from "./ProductByCategory";

class shopCategory extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { id }: any = this.props.match.params;
    const { err }: any = this.props.products;

    console.log(err);
    return (
      <Container>
        <Row className="mt-4 mb-4">
          <Col md="3">
            <CategoryList />
          </Col>
          <Col md="9">
            <ProductByCategory id={id} />
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    products: state.product
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(shopCategory);
