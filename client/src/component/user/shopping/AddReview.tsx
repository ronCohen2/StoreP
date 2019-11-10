import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Input,
  Button,
  Form,
  FormGroup,
  Label,
  Row
} from "reactstrap";
import { AddReview } from "../../../store/action/productAction";
import Rating from "react-rating";
import StartEmpty from "../../../../src/assistance/img/star-empty.png";
import StartFull from "../../../../src/assistance/img/star-full.png";
import swal from "sweetalert";
import { IAuth } from "../../../type/reducer";

class AddReviewC extends Component<P, S> {
  state = {
    stars: 1,
    content: ""
  };

  handleChange = (rate: Number) => {
    this.setState({
      stars: rate
    });
  };
  handleChangeInput = (e: any) => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = async (e: any) => {
    e.preventDefault();
    const { stars, content } = this.state;
    const { id } = this.props;
    const { _id, role } = this.props.auth.user;
    if (role) return swal("admin cant write review");
    await this.props.addReviewAction(stars, content, _id, id);
    this.setState({ content: "", stars: 1 });
  };
  render() {
    return (
      <Container className="border mt-3 mb-3">
        <Form onSubmit={this.handleSubmit}>
          <h3 className="to-center">Write Your Review</h3>
          <Label className="">Stars:</Label>
          <Rating
            emptySymbol={<img src={StartEmpty} className="icon" />}
            fullSymbol={<img src={StartFull} className="icon" />}
            initialRating={this.state.stars}
            onChange={rate => {
              this.handleChange(rate);
            }}
          />
          <FormGroup>
            <Label for="exampleText">Text:</Label>
            <Input
              type="textarea"
              id="content"
              value={this.state.content}
              onChange={this.handleChangeInput}
              required
            />
          </FormGroup>
          <Button type="submit">Send</Button>
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
    addReviewAction: (
      stars: Number,
      content: String,
      user: String,
      productId: String
    ) => dispatch(AddReview(stars, content, user, productId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewC);
interface P {
  addReviewAction: (
    stars: Number,
    content: String,
    user: String,
    productId: String
  ) => void;
  auth: IAuth;
  id: String;
}

interface S {
  stars: Number;

  content: String;
}
