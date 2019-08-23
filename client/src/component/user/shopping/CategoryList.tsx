import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCategory } from "../../../store/action/productAction";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";
class CategoryList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getCategoryList();
  }
  render() {
    const { category }: any = this.props.products;
    console.log(category);
    return (
      <div className="border">
        <h4 className="bg-light border">Category</h4>
        {category
          ? category.map((category: any, key: any) => {
              return (
                <CardText className="border-bottom">
                  {category.categoryName}
                </CardText>
              );
            })
          : null}
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
    getCategoryList: () => dispatch(getAllCategory())
  };
};
export default connect(
  maStateToProps,
  mapDispatchToProps
)(CategoryList);
