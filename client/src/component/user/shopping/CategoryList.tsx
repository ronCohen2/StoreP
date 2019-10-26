import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllCategory,
  getProductsByCategory
} from "../../../store/action/productAction";
import { Card, CardText, CardHeader, Col } from "reactstrap";
import { withRouter } from "react-router";
class CategoryList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getCategoryList();
  }
  redirect = (page: String) => {
    this.props.history.push(page);
  };
  render() {
    const { category }: any = this.props.products;
    return (
      <div className=" mb-4">
        <Card>
          <CardHeader>Category</CardHeader>
          <CardText
            className="border-bottom pb-3 pt-3"
            onClick={() => this.redirect("/category/all")}
          >
            All Products
          </CardText>
          {category
            ? category.map((cat: any, key: Number) => {
                return (
                  <CardText
                    className="border-bottom pb-3 pt-3 "
                    onClick={() => {
                      this.redirect(`/category/${cat._id}`);
                    }}
                  >
                    {cat.categoryName}
                  </CardText>
                );
              })
            : null}
        </Card>
      </div>
    );
  }
}

const maStateToProps = (state: any) => {
  return {
    products: state.product
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getCategoryList: () => dispatch(getAllCategory()),
    getProductsByCategory: (id: String) => dispatch(getProductsByCategory(id))
  };
};
export default connect(
  maStateToProps,
  mapDispatchToProps
)(withRouter(CategoryList));
