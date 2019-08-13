import React, { Component } from "react";
import { RouteProps } from "react-router";

class itemDetails extends Component<any & RouteProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { id }: any = this.props.match.params;
    return <div>{id}</div>;
  }
}

export default itemDetails;
