import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { addCategory, addProduct } from "../../store/action/adminAction";
import CategoryDropDown from "../layout/CategoryDropDown";
import "./Admin.css";
import swal from "sweetalert";

class AddProductAdmin extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: undefined,
      categoryName: undefined,
      price: undefined,
      image: undefined
    };
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: any) => {
    const { name, categoryName, price, image } = this.state;
    e.preventDefault();
    this.props.AddProduct(name, categoryName, price, image);
    this.setState({ name: "", categoryName: "", price: "", image: "" });
  };

  render() {
    const { name, categoryName, price, image } = this.state;
    const { category } = this.props.product;
    return (
      <Container className="border">
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <h3 className="text-muted">Add New Product</h3>

              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                  value={name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="categoryName">Category</Label>
                <select
                  className="border"
                  id="categoryName"
                  onChange={this.handleChange}
                  required
                >
                  <option>Category</option>
                  {category
                    ? category.map((category: any, key: Number) => {
                        return (
                          <option value={category._id}>
                            {category.categoryName}
                          </option>
                        );
                      })
                    : null}
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  type="number"
                  id="price"
                  onChange={this.handleChange}
                  value={price}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  id="image"
                  onChange={this.handleChange}
                  value={image}
                  required
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
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
    AddProduct: (
      name: String,
      category: String,
      price: Number,
      image: String
    ) => dispatch(addProduct(name, category, price, image))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductAdmin);
