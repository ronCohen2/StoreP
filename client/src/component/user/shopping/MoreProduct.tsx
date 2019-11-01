import React, { Component } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import { getMoreProduct } from "../../../store/action/productAction";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router";

class MoreProduct extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { categoryId } = this.props.product.productDetails[0];
    this.props.getMoreProduct(categoryId, this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps: any) {
    if (this.props.match.params !== nextProps.match.params) {
      const { categoryId } = nextProps.product.productDetails[0];
      this.props.getMoreProduct(categoryId, nextProps.match.params.id);
    }
  }
  render() {
    const { moreProduct } = this.props.product;
    return (
      <Container className="mt-5 mb-5">
        <h3>More Product</h3>

        <Row className="border rounded moreProductContainer">
          {moreProduct
            ? moreProduct.map((product: any, key: any) => {
                return (
                  <div className="">
                    <img
                      className="moreProduct-Image"
                      src={require(`../../../../../public/image/${product.image}`)}
                      onClick={() =>
                        this.props.history.push(`/itemDetails/${product._id}`)
                      }
                    />
                    <h6 className="to-center">{product.productName}</h6>
                  </div>
                );
              })
            : null}
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
    getMoreProduct: (id: String, ProductId: String) =>
      dispatch(getMoreProduct(id, ProductId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MoreProduct));
