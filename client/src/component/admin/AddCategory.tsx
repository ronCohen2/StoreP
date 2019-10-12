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
    // e.preventDefault();
    // console.log("sdfds");
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md="3">
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Category Name "
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  id="image"
                  placeholder="src"
                  onChange={this.handleChange}
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
