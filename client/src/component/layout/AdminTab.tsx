// import React from "react";
// import { NavItem } from "reactstrap";
// import { NavLink } from "react-router-dom";

// export default function AdminTab() {
//   return (
//     <NavItem>
//       <NavLink to={"/admin"} className="d-2 text-white">
//         Admin
//       </NavLink>
//     </NavItem>
//   );
// }
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
        <DropdownItem onClick={() => history.push("/admin/add-product")}>
          Add Product
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => history.push("/")}>
          Edit Product
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => history.push("/admin/add-category")}>
          Add Category
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};
export default withRouter(AdminTab);
