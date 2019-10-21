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
import {
  addCategory,
  addProduct,
  UploadImage
} from "../../store/action/adminAction";
import CategoryDropDown from "../layout/CategoryDropDown";
import "./Admin.css";
import swal from "sweetalert";
import { json } from "body-parser";
import { jsxOpeningElement } from "@babel/types";
import axios from "axios";
class AddProductAdmin extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: undefined,
      categoryName: undefined,
      price: undefined
    };
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleChangeFile = (e: any) => {
    this.setState({
      image: e.target.files[0]
    });
  };
  // uploadImage = async() => {
  //   console.log("sdfsdf");
  //   const { image } = this.state;
  //   const data = new FormData();
  //   data.append("file", image);
  //   axios.post("http://localhost:3001/Admin/Upload", data, {});
  // };

  handleSubmit = async (e: any) => {
    const { name, categoryName, price, image } = this.state;
    e.preventDefault();
    const promsie1 = new Promise(reslove => {
      reslove(this.props.UploadImage(image));
    });
    promsie1.then(() => {
      const { fileName } = this.props.admin;
      this.props.AddProduct(name, categoryName, price, fileName);
      this.setState({ name: "", categoryName: "", price: "", image: "" });
    });
  };

  render() {
    const { name, categoryName, price, image } = this.state;
    const { category } = this.props.product;
    return (
      <Container className="border">
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
                  type="file"
                  id="image"
                  onChange={this.handleChangeFile}
                  // const file = e.target.files[0];
                  // var file = new FormData();
                  // file.append("file", e.target.files[0]);
                  // axios
                  //   .post("http://localhost:3001/Admin/Upload", file, {
                  //     // receive two parameter endpoint url ,form data
                  //   })
                  //   .then(res => {
                  //     // then print response status
                  //     console.log(res.statusText);
                  //   });

                  // value={image}
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
    product: state.product,
    admin: state.admin
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    AddProduct: (name: String, category: String, price: Number, image: any) =>
      dispatch(addProduct(name, category, price, image)),
    UploadImage: (image: any) => dispatch(UploadImage(image))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductAdmin);
