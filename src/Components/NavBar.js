import React from "react";
import { Link, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const NavBar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Main
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About 
      </Menu.Item>
    </Link>
    <Link to="/edit">
      <Menu.Item>
        Edit
      </Menu.Item>
    </Link>
  </Menu>
);

export default NavBar;