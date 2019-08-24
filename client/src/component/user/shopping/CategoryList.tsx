import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCategory } from "../../../store/action/productAction";
import { Card, CardText, CardHeader, Col } from "reactstrap";
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
    return (
      <div className=" mb-4">
        <Card>
          <CardHeader>Category</CardHeader>
          {category
            ? category.map((category: any, key: Number) => {
                return (
                  <CardText
                    className="border-bottom pb-3 pt-3 "
                    onClick={() => console.log(category._id)}
                  >
                    {category.categoryName}
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
    getCategoryList: () => dispatch(getAllCategory())
  };
};
export default connect(
  maStateToProps,
  mapDispatchToProps
)(CategoryList);
