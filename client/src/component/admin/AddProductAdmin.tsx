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

class AddProductAdmin extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: undefined,
      category: undefined,
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
    const { name, category, price, image } = this.state;
    e.preventDefault();
    this.props.AddProduct(name, category, price, image);
    this.setState({ name: "", category: "", price: "", image: "" });
  };
  render() {
    const { name, category, price, image } = this.state;
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
                <Label for="category">Category</Label>
                <Input
                  type="text"
                  id="category"
                  onChange={this.handleChange}
                  value={category}
                  required
                />
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
  null,
  mapDispatchToProps
)(AddProductAdmin);
