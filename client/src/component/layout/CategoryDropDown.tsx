import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { getAllCategory } from "../../store/action/productAction";
import { withRouter } from "react-router";

class CategoryDropDown extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategoryList();
  }
  render() {
    const { category }: any = this.props.products;
    const { history } = this.props;
    return (
      <div>
        <UncontrolledDropdown className="navb">
          <DropdownToggle caret className="btn-lg navb">
            Catrgory
          </DropdownToggle>
          <DropdownMenu>
            {category
              ? category.map((name: any, key: string) => {
                  return (
                    <div>
                      <DropdownItem
                        className="mt-3 mr-3 ml-3"
                        key={key}
                        onClick={() => history.push(`/category/${name._id}`)}
                      >
                        {name.categoryName}
                      </DropdownItem>
                      <DropdownItem divider />
                    </div>
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
)(withRouter(CategoryDropDown));
