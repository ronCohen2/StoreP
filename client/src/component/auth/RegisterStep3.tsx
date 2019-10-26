import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  Button,
  Form
} from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  Rstep3,
  CheckCode,
  getPhoneNumber
} from "../../store/action/authAction";

class RegisterStep3 extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  async componentDidMount() {
    const { ID } = this.props.auth.user || this.props.auth.userId;
    await this.props.getPhoneNumber(ID);
    const { phone } = await this.props.auth;
    await this.props.SendVerfication(phone);
  }
  toHomepage = () => {
    this.props.history.push("/category/all");
  };
  handleSubmit = (e: any) => {
    const { code } = this.state;
    const { userId, password, id } = this.props.auth;
    const verifyRequestId = this.props.auth.Verid;
    e.preventDefault();
    this.props.checkCode(
      verifyRequestId,
      code,
      userId,
      password,
      id,
      this.toHomepage
    );
  };

  render() {
    const { phone } = this.props.auth;
    return (
      <Container className="border mt-3  ">
        <Form onSubmit={this.handleSubmit}>
          <Row className="m-3">
            <Col className="to-center ">Sign up</Col>
            <Col className="to-center">User Details</Col>
            <Col className="to-center font-weight-bold">Phone Verfication</Col>
          </Row>
          <Row>
            <Col className="to-center">
              <img
                className="Verfication-image"
                src={
                  "https://conceptdraw.com/a462c4/p17/preview/640/pict--sms-1-mobile-and-phones-vector-stencils-library"
                }
              />
            </Col>
          </Row>
          <Row>
            <Col className="to-center">
              <div>
                Enter the code from your SMS ! let us know this phone number is
                belongs to you .Enter the code in the SMS sent to `${phone}`
              </div>
            </Col>
          </Row>

          <InputGroup>
            <Input
              placeholder="PIN"
              type="text"
              className="input-register  "
              id="code"
              onChange={this.handleChange}
              required
            />
          </InputGroup>
          <Row>
            <Col>
              <Button>Confirm</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    SendVerfication: async (Phone: Number) => await dispatch(Rstep3(Phone)),
    checkCode: async (
      verifyRequestId: String,
      code: Number,
      userId: Number,
      password: String,
      id: String,
      toHomePage: any
    ) =>
      await dispatch(
        CheckCode(verifyRequestId, code, userId, password, id, toHomePage)
      ),
    getPhoneNumber: (id: String) => dispatch(getPhoneNumber(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterStep3));
