import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { connect } from "react-redux";
import { searchProducts } from "../../store/action/productAction";
import "./Admin.css";
import { removeProduct } from "../../store/action/adminAction";
import { withRouter } from "react-router";

class EditProduct extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: null
    };
  }
  handleSubmit = (e: any) => {
    const { search } = this.state;
    e.preventDefault();
    this.props.Search(search);
  };
  handleChange = (e: any) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search } = this.props.product;
    console.log(search);
    return (
      <Container className="border ">
        <Row>
          <Col>
            <Form onChange={this.handleSubmit}>
              <InputGroup>
                <Input
                  id="search"
                  onChange={this.handleChange}
                  placeholder="Search Product"
                  value={this.state.name}
                  required
                />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {search
              ? search.map((option: any, key: Number) => {
                  return (
                    <div>
                      <img className="Search_image" src={option.image} />
                      <span>{option.productName}</span>
                      <span className="float-right">
                        <span
                          onClick={() =>
                            this.props.history.push(`/edit/${option._id}`)
                          }
                        >
                          edit
                        </span>
                        <span
                          onClick={() => this.props.RemoveProduct(option._id)}
                        >
                          X
                        </span>
                      </span>
                    </div>
                  );
                })
              : null}
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
    Search: (search: String) => dispatch(searchProducts(search)),
    RemoveProduct: (Id: String) => dispatch(removeProduct(Id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProduct));
