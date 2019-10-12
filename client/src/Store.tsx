import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import home from "./component/user/home/home";
import shopping from "./component/user/shopping/shopping";
import contact from "./component/user/contact/contact";
import About from "./component/user/contact/About";
import itemDetails from "./component/user/shopping/itemDetails";
import noMatch from "./component/noMatch";
import register from "./component/auth/Register";
import login from "./component/auth/Login";
import order from "./component/user/oreder/order";
import shoppingCart from "./component/user/shopping/shoppingCart";
import NavbarC from "./component/layout/Navbar";
import TopNav from "./component/layout/TopNav";
import Footer from "./component/layout/Footer";
import shopCategory from "./component/user/shopping/shopCategory";
import Slide from "./component/user/shopping/CartMenu";
import RegisterStep2 from "./component/auth/RegisterStep2";
import Search from "./component/layout/Search";
import dashbord from "./component/admin/dashbord";

class Store extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Slide right pageWrapId={"page-wrap"} />
        <main id="page-wrap">
          <TopNav />
          <NavbarC />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/shop" component={shopping} />
            <Route path="/category/:id" component={shopCategory} />
            <Route path="/itemDetails/:id" component={itemDetails} />
            <Route path="/search/:product" component={Search} />
            <Route path="/contact" component={contact} />
            <Route path="/about" component={contact} />
            <Route path="/login" exact component={login} />
            <Route path="/register" component={register} />
            <Route path="/register2" component={RegisterStep2} />
            <Route path="/order" component={order} />
            <Route path="/admin" component={dashbord} />
            <Route path="/" component={noMatch} />
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default Store;
