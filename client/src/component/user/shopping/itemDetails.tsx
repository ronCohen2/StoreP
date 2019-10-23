import React, { Component } from "react";
import { RouteProps } from "react-router";
import { connect } from "react-redux";
import { getProductsDetails } from "../../../store/action/productAction";
import { Container, Row, Col } from "reactstrap";
import QuantintyModal from "./QuantintyModal";

class itemDetails extends Component<any & RouteProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { id }: any = this.props.match.params;
    console.log(id);
    this.props.getProductDetails(id);
    console.log(this.props);
  }
  render() {
    const { productDetails }: any = this.props.products;
    console.log(productDetails);

    return (
      <Container className=" rounded pl-4 pt-4">
        {productDetails ? (
          <Row>
            <Col sm="12" md="6">
              <img
                src={require(`../../../../../public/image/${productDetails[0].image}`)}
                className="poductDetailsIMG border "
              />
            </Col>
            <Col md="6">
              <h3>{productDetails[0].productName}</h3>
              <p> Price : {productDetails[0].price}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquam ultricies ultricies. Aenean varius semper vehicula.
                Donec in eros felis. Sed mattis quis elit quis euismod.
                Suspendisse hendrerit pharetra tristique. Cras porttitor eros
                metus. Vestibulum urna orci, vehicula eu lacus eget, ornare
                congue nunc. Proin laoreet aliquam ante id hendrerit. Nam
                posuere diam vitae sapien fringilla tincidunt. Aenean fringilla
                laoreet tincidunt. Sed faucibus bibendum felis, a volutpat urna
                congue non. Mauris ac ante a arcu aliquam sollicitudin.
              </p>
              <QuantintyModal name={productDetails[0].productName} />
            </Col>
          </Row>
        ) : (
          <p>Error in fetch date .</p>
        )}
      </Container>
    );
  }
}
const mapStateTopProps = (state: any) => {
  return {
    products: state.product
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getProductDetails: (id: String) => dispatch(getProductsDetails(id))
  };
};

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(itemDetails);
