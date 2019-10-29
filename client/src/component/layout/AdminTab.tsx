
import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./layout.css";
import { Redirect, withRouter } from "react-router";

const AdminTab = (props: any) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const { history } = props;
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className="Admin-button">
        Admin
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => history.push("/add-product")}>
          Add Product
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => history.push("/edit")}>
          Edit Product
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => history.push("/add-category")}>
          Add Category
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};
export default withRouter(AdminTab);
