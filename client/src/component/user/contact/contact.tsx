import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { newContact } from "../../../store/action/productAction";
import MapContact from "./MapContact";
import "./contact.css";

class contact extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: null,
      email: null,
      text: null
    };
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, text } = this.state;
    this.props.addContact(name, email, text, this.toHomePage);
  };
  toHomePage = () => {
    this.props.history.push("/");
  };
  render() {
    const { userConnected } = this.props.auth;
    // if (userConnected) {
    //   const { firstName } = this.props.auth.user;
    //   this.setState({ name: firstName });
    // }
    return (
      <Container>
        <Row className="mt-4 mb-4">
          <Col sm="12" md="6" className="border">
            <div>
              <h1 className="to-center m-3">Contact</h1>
              <p>
                Address :<span className="">Isreal , Tel aviv</span>
              </p>
              <p>
                Email :<span className="">RonC665@gmail.com</span>
              </p>
              <p>
                Phone :<span className="">054-336-9400</span>
              </p>
            </div>
          </Col>
          <Col sm="12" md="6">
            <Form onSubmit={this.handleSubmit} className="border">
              <h1 className="to-center m-3">Contact</h1>
              <FormGroup>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  id="text"
                  placeholder="your text.."
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <Button>Send!</Button>
            </Form>
          </Col>
        </Row>

        {/* <Row>
             <MapContact />

            </Row> */}
      </Container>
    );
  }
}
const mapStateToProps = (stata: any) => {
  return {
    auth: stata.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addContact: (name: String, email: String, text: String, toHomePage: any) =>
      dispatch(newContact(name, email, text, toHomePage))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(contact);
