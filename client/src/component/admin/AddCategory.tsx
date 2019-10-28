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
import { addCategory, UploadImage } from "../../store/action/adminAction";
import { withRouter } from "react-router";

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
  handleChangeFile = (e: any) => {
    this.setState({
      image: e.target.files[0]
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, image } = this.state;
    const promsie1 = new Promise(reslove => {
      reslove(this.props.UploadImage(image));
    });
    promsie1.then(() => {
      const { fileName } = this.props.admin;
      const { name } = this.state;
      this.props.AddCategory(name, fileName);
      this.setState({ name: "", image: "" });
    });
  };

  render() {
    return (
      <Container className="border">
        <Row>
          <Col>
            <Form onSubmit={(e: any) => this.handleSubmit(e)}>
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
                  type="file"
                  id="image"
                  onChange={this.handleChangeFile}
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
    admin: state.admin,
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    AddCategory: (name: String, image: String) =>
      dispatch(addCategory(name, image)),
    UploadImage: (image: any) => dispatch(UploadImage(image))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddCategory));
