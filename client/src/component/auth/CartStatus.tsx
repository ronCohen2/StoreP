import React, { Component } from "react";
import { Alert } from "reactstrap";

class CartStatus extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="statusAlert">
        <Alert color="primary">This is a primary alert — check it out!</Alert>
      </div>
    );
  }
}

export default CartStatus;
