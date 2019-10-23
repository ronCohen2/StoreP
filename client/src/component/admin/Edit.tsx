import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { getProductsDetails } from "../../store/action/productAction";
import { editProduct } from "../../store/action/adminAction";
import swal from "sweetalert";

class Edit extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProductsDetails(id);
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { productDetails } = this.props.product;

    return (
      <Container>
        {productDetails ? (
          <>
            <Row>
              <Col sm="12" md="4">
                <div className="border">
                  <img
                    src={require(`../../../../public/image/${productDetails[0].image}`)}
                    className="productImage-admin"
                  />
                </div>
              </Col>
              <Col sm="12" md="8">
                <h3>Edit Product</h3>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    id="productName"
                    placeholder={productDetails[0].productName}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="price">Price</Label>
                  <Input
                    type="text"
                    id="price"
                    placeholder={productDetails[0].price}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="image">Image</Label>
                  <Input
                    type="text"
                    id="image"
                    placeholder={productDetails[0].image}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <Button
                  onClick={() => {
                    console.log(this.state);

                    const obj = {
                      name: productDetails[0].productName,
                      price: productDetails[0].price,
                      image: productDetails[0].image
                    };
                    if (
                      this.state.name ||
                      this.state.price ||
                      this.state.image
                    ) {
                      const aa = Object.assign(obj, this.state);
                      this.props.editProduct(productDetails[0]._id, aa);
                    } else {
                      swal(
                        "Error:",
                        "Please Change some feild to edit !",
                        "error"
                      );
                    }
                  }}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </>
        ) : null}
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    product: state.product
  };
};
const mapDispatchToProps = (diaptch: any) => {
  return {
    getProductsDetails: (id: String) => diaptch(getProductsDetails(id)),
    editProduct: (id: String, payload: Object) =>
      diaptch(editProduct(id, payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
