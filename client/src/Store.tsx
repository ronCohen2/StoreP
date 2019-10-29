import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import home from "./component/user/home/home";
import contact from "./component/user/contact/contact";
import About from "./component/user/contact/About";
import itemDetails from "./component/user/shopping/itemDetails";
import noMatch from "./component/noMatch";
import register from "./component/auth/RegisterStep1";
import login from "./component/auth/login";
import order from "./component/user/oreder/order";
import shoppingCart from "./component/user/shopping/shoppingCart";
import NavbarC from "./component/layout/Navbar";
import TopNav from "./component/layout/TopNav";
import Footer from "./component/layout/Footer";
import shopCategory from "./component/user/shopping/shopCategory";
import Slide from "./component/user/shopping/CartMenu";
import Search from "./component/layout/Search";
import Edit from "./component/admin/Edit";
import AddCategory from "./component/admin/AddCategory";
import AddProductAdmin from "./component/admin/AddProductAdmin";
import EditProduct from "./component/admin/EditProduct";
import Register from "./component/auth/Register";
// import Receipt from "./component/user/oreder/Receipt";
import Receipt from "./component/user/oreder/Receipt";
import { PDFViewer } from "@react-pdf/renderer";

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
            <Route path="/category/:id" component={shopCategory} />
            <Route path="/itemDetails/:id" component={itemDetails} />
            <Route path="/search/:product" component={Search} />
            <Route path="/contact" component={contact} />
            <Route path="/about" component={contact} />
            <Route path="/register" component={Register} />
            <Route path="/order" component={order} />
            <Route path="/Receipt" component={Receipt} />
            <Route path="/Add-category" component={AddCategory} />
            <Route path="/Add-Product" component={AddProductAdmin} />
            <Route path="/edit" exact component={EditProduct} />
            <Route path="/Edit/:id" component={Edit} />
            <Route path="/" component={noMatch} />
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default Store;
