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
import { getCartItems } from "../../../store/action/cartAction";

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
    fontSize: 12,
    textAlign: "right"
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  }
});

class Receipt extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentWillMount() {
    const { cartId } = this.props.cart.order.Order;
    this.props.getCartItems(cartId);
  }
  render() {
    const { props } = this;
    const arr = [1, 2, 3];
    const {
      street,
      city,
      shipDate,
      totalPrice,
      cartId
    } = props.cart.order.Order;
    const { firstName, lastName, email } = props.auth.user;
    const { items } = this.props.cart;
    return (
      <Container>
        <PDFViewer width="1000" height="1000">
          <Document>
            <Page size="A4" style={styles.text}>
              <View style={styles.top}>
                <Text> Name :{firstName + " " + lastName}</Text>
                <Text> Email :{email}</Text>
                <Text> Adress :{street + "," + city}</Text>
                <Text> Ship Date :{shipDate}</Text>
              </View>

              <View style={styles.center}>
                <Text> E-Commerce Receipt Number : {totalPrice}</Text>
              </View>
              <View style={styles.center}>
                {items
                  ? items.map((arr: any, key: any) => {
                      return (
                        <Text>
                          {key + 1} ) {arr.name} , Quantity :{arr.quantity}
                        </Text>
                      );
                    })
                  : null}
              </View>

              <View style={styles.center}>
                <Text> Total Price : {totalPrice}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
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
    getCartItems: (id: any) => dispatch(getCartItems(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Receipt);
