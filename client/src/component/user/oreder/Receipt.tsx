import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
import { Container, Row, Col } from "reactstrap";
import { PDFViewer } from "@react-pdf/renderer";
import { connect } from "react-redux";
import {
  getCartItems,
  getReceiptItems
} from "../../../store/action/cartAction";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
    // backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 50,
    padding: 10,
    flexGrow: 1
  },
  text: {
    textAlign: "justify"
  },
  center: {
    textAlign: "center",
    margin: 20
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  top: {
    margin: 30,
    fontSize: 12
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  }
});

class Receipt extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
  }
  componentDidMount() {
    const { cartId } = this.props.cart;
    this.props.getReceiptItems(cartId);
  }
  render() {
    const { props } = this;
    const {
      street,
      city,
      shipDate,
      totalPrice,
      cartId
    } = props.cart.order.Order;
    const { firstName, lastName, email } = props.auth.user;
    const { receipt } = props.cart;
    return (
      <div>
        <PDFViewer width="1000" height="1000">
          <Document>
            {receipt ? (
              <Page size="A4" style={styles.text}>
                <View style={styles.top}>
                  <Text> Name :{firstName + " " + lastName}</Text>
                  <Text> Email :{email}</Text>
                  <Text> Adress :{street + "," + city}</Text>
                  <Text> Ship Date :{shipDate}</Text>
                </View>

                <View style={styles.center}>
                  <Text> E-Commerce Receipt : {cartId}</Text>
                </View>
                <View>
                  {receipt.map(
                    (arr: { name: String; quantity: Number }, key: any) => {
                      const { name, quantity } = arr;
                      return (
                        <Text>
                          {key} ) {name} , Quantity :{quantity}
                        </Text>
                      );
                    }
                  )}
                </View>
                <View style={styles.center}>
                  <Text> Total Price : {totalPrice}</Text>
                </View>
              </Page>
            ) : null}
          </Document>
        </PDFViewer>
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
    getReceiptItems: (id: String) => dispatch(getReceiptItems(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Receipt);

interface P {
  cart: {
    receipt: [];
    cartId: String;
    order: {
      Order: {
        street: String;
        city: String;
        shipDate: Date;
        totalPrice: Number;
        cartId: String;
      };
    };
  };
  auth: {
    user: {
      firstName: String;
      lastName: String;
      email: String;
    };
  };
  getReceiptItems: (id: String) => [];
}
interface S {}
