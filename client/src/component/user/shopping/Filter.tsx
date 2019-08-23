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
class Filter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      filterPrice: null
    };
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
    const maxPrice = 123;
    const { filterPrice } = this.state;

    return (
      <Card>
        <CardHeader>Filter By Price</CardHeader>
        <CardBody>
          <CardText>
            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                max="100"
                className="slider"
                id="myRange"
                onChange={() => {
                  this.changeFilterPrice(
                    (document.getElementById("myRange") as HTMLInputElement)
                      .value
                  );
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

export default Filter;
