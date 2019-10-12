import React, { Component } from "react";
import AddCategory from "./AddCategory";
import AddProductAdmin from "./AddProductAdmin";
class dashbord extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AddCategory />
        <AddProductAdmin />
      </div>
    );
  }
}

export default dashbord;
