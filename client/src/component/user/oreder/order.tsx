import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import {
  order as Order,
  checkShipDate
} from "../../../store/action/cartAction";
import { withRouter } from "react-router";
import swal from "sweetalert";

class order extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      street: null,
      city: null
    };
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  setToStreet = () => {
    const { street } = this.props.auth.user;
    this.setState({
      street: street
    });
  };
  setToCity = () => {
    const { city } = this.props.auth.user;
    this.setState({
      city
    });
  };
  checkShipDate = (e: any) => {
    this.props.checkShipDate(e.target.value);
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    const { city, street, shipDate, creditCard } = this.state;
    const { cartId, totalPrice, data } = this.props.cart;
    const { items } = this.props.cart;
    const userId = this.props.auth.user._id;
    if (totalPrice > 0) {
      this.props.order(
        userId,
        cartId,
        totalPrice,
        city,
        street,
        shipDate,
        creditCard,
        this.toHomePage
      );
    } else {
      swal("WARNING!", "Your cart is empty!", "error");
    }
  };
  toHomePage = () => {
    this.props.history.push("/receipt");
  };
  render() {
    const { items, date, orderErr } = this.props.cart;
    console.log(orderErr);
    return (
      <Container>
        <form>
          {orderErr
            ? orderErr.map((err: String, key: String) => {
                return (
                  <Alert className="mt-1" color="danger">
                    {err}
                  </Alert>
                );
              })
            : null}
          <Row className="">
            <Col>
              <h4>Billing details</h4>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  id="city"
                  placeholder="e.g Tel Aviv"
                  onChange={this.handleChange}
                  value={this.state.city}
                  onDoubleClick={() => this.setToCity()}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="Street">Street</Label>
                <Input
                  id="street"
                  placeholder="e.g Rothschild"
                  onChange={this.handleChange}
                  value={this.state.street}
                  required
                  onDoubleClick={() => this.setToStreet()}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="10">
              <FormGroup>
                <Label for="date">Order Date</Label>
                <Input
                  type="date"
                  id="shipDate"
                  onChange={e => {
                    this.checkShipDate(e);
                    this.handleChange(e);
                  }}
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              {date === true ? (
                <i className="far fa-calendar-check fa-3x mt-3 mr-4"></i>
              ) : null}
              {date === false ? (
                <i className="far fa-calendar-times fa-3x mt-3 mr-4"></i>
              ) : null}
              {date === null ? <p>-</p> : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Additional information</h4>
              <FormGroup>
                <Label for="CreditCard">Credit Card</Label>
                <Input
                  id="creditCard"
                  placeholder="1234-5678-1234-5678"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          {/* <FormGroup>
                <Label for="CreditCard">Cardholder Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="e.g John Doe"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup className="d-flex justify-content-between">
                <div>
                  <Label for="expirdate">Expiration Date</Label>
                  <Input
                    id="expirdate"
                    placeholder="mm/yy"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <Label for="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="XXX"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </FormGroup>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <Table borded>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th> Quantinty</th>
                    <th> Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items
                    ? items.map((item: any, key: Number) => {
                        return (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.totalPrice}</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="submit"
                value="Order"
                onClick={e => this.onSubmit(e)}
              />
            </Col>
          </Row>
        </form>
      </Container>
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
    order: (
      userId: String,
      cartId: String,
      totalPrice: Number,
      city: String,
      street: String,
      shipDate: any,
      creditCard: Number,
      toHomePage: any
    ) =>
      dispatch(
        Order(
          userId,
          cartId,
          totalPrice,
          city,
          street,
          shipDate,
          creditCard,
          toHomePage
        )
      ),
    checkShipDate: (shipDate: String) => dispatch(checkShipDate(shipDate))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(order));
