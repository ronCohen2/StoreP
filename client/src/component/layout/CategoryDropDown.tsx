import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { getAllCategory } from "../../store/action/productAction";

class CategoryDropDown extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategoryList();
    // console.log(this.props.products);
  }
  render() {
    const { category }: any = this.props.products;
    console.log(category);

    // console.log(category);
    return (
      <div>
        <UncontrolledDropdown color="light ">
          <DropdownToggle caret className=" display-2">
            Catrgory
          </DropdownToggle>
          <DropdownMenu>
            {category
              ? category.map((name: any, key: any) => {
                  return (
                    <DropdownItem className="mt-3 mr-3 ml-3" key={key}>
                      {name.categoryName}
                    </DropdownItem>
                  );
                })
              : null}
          </DropdownMenu>
        </UncontrolledDropdown>
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
)(CategoryDropDown);
