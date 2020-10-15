import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-white px-0">
        <Link className="navbar-brand" to="/home">
          <img src={require("../images/Logo.svg")} alt=""></img>
        </Link>

        <DropdownButton
          alignRight
          title="User"
          id="dropdown-menu-align-right"
          className="float-sm-right"
        >
          <Dropdown.Item eventKey="1">
            <Link to="/addbookadmin">
              <img src={require("../images/book.svg")} className="pr-2"></img>
              Add Book
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2">
            <Link to="/">
              <img
                src={require("../images/logoutAdmin.svg")}
                className="pr-2"
              ></img>
              Logout
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      </nav>
    </div>
  );
};

export default NavBar;
