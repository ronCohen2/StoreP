import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import { addCartItem } from "../../../store/action/cartAction";

class QuantintyModal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      quantity: 0,
      id: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState: any) => ({
      modal: !prevState.modal
    }));
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    const { cartId } = this.props.cart;
    const { id, name } = this.props;
    const { quantity } = this.state;
    const { userConnected } = this.props.auth;
    if (userConnected) {
      this.props.AddToCart(cartId, id, quantity, name);
    } else {
      swal("You need to Login");
      this.toggle();
    }
  };

  render() {
    const { userConnected } = this.props.auth;
    return (
      <div>
        <button className="DetailsButton" onClick={this.toggle}>
          Add To Cart
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader>{this.props.name}</ModalHeader>
            <ModalBody>
              <label className="mr-4">Quantinty :</label>
              <input
                type="number"
                min="1"
                step="1"
                placeholder="1"
                id="quantity"
                onChange={this.handleChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">
                Add
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart,
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    AddToCart: (
      cartId: String,
      productId: String,
      quantity: Number,
      name: String
    ) => dispatch(addCartItem(cartId, productId, quantity, name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuantintyModal);
