import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Filter from "./Filter";
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
    return (
      <Container>
        <Row>
          <Col md="3">
            <CategoryList />
            <Filter />
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
  return {};
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(shopCategory);
