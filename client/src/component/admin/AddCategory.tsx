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
import { addCategory } from "../../store/action/adminAction";

class AddCategory extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: null,
      image: null
    };
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: any) => {
    const { name, image } = this.state;
    e.preventDefault();
    this.props.AddCategory(name, image);
    this.setState({ name: "", image: "" });
  };
  render() {
    return (
      <Container className="border">
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <h3 className="text-muted">Add New Category</h3>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  id="image"
                  onChange={this.handleChange}
                  value={this.state.image}
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
    AddCategory: (name: String, image: String) =>
      dispatch(addCategory(name, image))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddCategory);
