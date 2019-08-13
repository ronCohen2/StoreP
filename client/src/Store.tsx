import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home from "./component/user/home/home";
import shopping from "./component/user/shopping/shopping";
import contact from "./component/user/contact/contact";
import itemDetails from "./component/user/shopping/itemDetails";

class Store extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>nav</div>
        <Route path="/" exact component={home} />
        <Route path="/shopping" component={shopping} />
        <Route path="/itemDetails/:id" component={itemDetails} />
        <Route path="/contact" component={contact} />
      </Router>
    );
  }
}

export default Store;
