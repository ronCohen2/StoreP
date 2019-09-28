import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Table
} from "reactstrap";
import { connect } from "react-redux";
import {
  order as Order,
  checkShipDate
} from "../../../store/action/cartAction";

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
    const { cartId, totalPrice } = this.props.cart;
    const userId = this.props.auth.user._id;
    this.props.order(
      userId,
      cartId,
      totalPrice,
      city,
      street,
      shipDate,
      creditCard
    );
  };
  render() {
    const { items, date } = this.props.cart;
    return (
      <Container>
        <Form>
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
                  required
                  onDoubleClick={() => this.setToCity()}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="Street">Street</Label>
                <Input
                  id="Street"
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
              {date === true ? <p>Great Date </p> : null}
              {date === false ? <p>try another day</p> : null}
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
              <FormGroup>
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
          </Row>
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
        </Form>
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
      creditCard: Number
    ) =>
      dispatch(
        Order(userId, cartId, totalPrice, city, street, shipDate, creditCard)
      ),
    checkShipDate: (shipDate: String) => dispatch(checkShipDate(shipDate))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(order);
