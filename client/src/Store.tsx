import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import home from "./component/user/home/home";
import shopping from "./component/user/shopping/shopping";
import contact from "./component/user/contact/contact";
import itemDetails from "./component/user/shopping/itemDetails";
import noMatch from "./component/noMatch";
import register from "./component/auth/register";
import login from "./component/auth/login";
import order from "./component/user/oreder/order";
import shoppingCart from "./component/user/shopping/shoppingCart";
import NavbarC from "./component/layout/Navbar";
import TopNav from "./component/layout/TopNav";

class Store extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <TopNav />
        <NavbarC />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/shopping" component={shopping} />
          <Route path="/itemDetails/:id" component={itemDetails} />
          <Route path="/contact" component={contact} />
          <Route path="/login" exact component={login} />
          <Route path="/register" component={register} />
          <Route path="/order" component={order} />
          <Route path="/shoppingCart" component={shoppingCart} />

          <Route path="/" component={noMatch} />
        </Switch>
      </Router>
    );
  }
}

export default Store;
