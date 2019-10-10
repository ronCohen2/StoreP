import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Label
} from "reactstrap";
import { connect } from "react-redux";
import { filter } from "minimatch";

class Filter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      filterPrice: 1
    };
  }

  componentWillReceiveProps(nextProps: any) {
    const { allProducts } = this.props.product;

    console.log("test" + allProducts);
    if (this.props !== nextProps && allProducts) {
      var max = allProducts.reduce((prev: any, current: any) => {
        return prev.price > current.price ? prev : current;
      });
      this.setState({
        filterPrice: max.price
      });
    }
  }

  updateTextInput = (val: any) => {
    (document.getElementById("textInput") as HTMLInputElement).value = val;
  };
  changeFilterPrice = (price: any) => {
    this.setState({
      filterPrice: price
    });
  };
  render() {
    const { filterPrice } = this.state;

    return (
      <Card>
        <CardHeader>Filter By Price</CardHeader>
        <CardBody>
          <CardText>
            <div className="slidecontainer">
              {/* {filterPrice ? ( */}
              <input
                type="range"
                min="0"
                max={filterPrice}
                className="slider"
                id="myRange"
                onChange={() => {
                  // this.changeFilterPrice(
                  //   (document.getElementById("myRange") as HTMLInputElement)
                  //     .value
                  // );
                  console.log(
                    (document.getElementById("myRange") as HTMLInputElement)
                      .value
                  );
                  this.setState({
                    filterPrice: (document.getElementById(
                      "myRange"
                    ) as HTMLInputElement).value
                  });
                }}
              />
            </div>
            <Button>Filter!</Button>
            <Label className="ml-3"> Max Price :{filterPrice}</Label>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    product: state.product
  };
};
export default connect(
  mapStateToProps,
  null
)(Filter);
