import React, { Component } from "react";
import { withRouter } from "react-router";

class AdminNav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="AdminNav-container text-white ">
        <div className=" AdminNavLink">
          <h3>E-Commerce</h3>

          <h4
            className="my-4"
            onClick={() => this.props.history.push("/Dashboard")}
          >
            <i className="fas fa-home"></i> Main
          </h4>
          <h4 className="my-4" onClick={() => this.props.history.push("/edit")}>
            <i className="fab fa-product-hunt"></i> Product
          </h4>
          <h4
            className="my-4"
            onClick={() => this.props.history.push("/Add-category")}
          >
            <i className="fab fa-connectdevelop"></i> Category
          </h4>
          <h4
            className="my-4"
            onClick={() => this.props.history.push("/UserMessage")}
          >
            <i className="far fa-envelope-open"></i> Message
          </h4>
          <h4
            className="my-4"
            onClick={() => this.props.history.push("/Stock")}
          >
            <i className="fas fa-cubes"></i> Stock
          </h4>
          <h4 className="my-4" onClick={() => this.props.history.push("/")}>
            <i className="far fa-user"></i>Site
          </h4>
          <h4
            className="my-4"
            onClick={() => this.props.history.push("/Setting")}
          >
            <i className="far fa-user"></i>Setting
          </h4>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminNav);
