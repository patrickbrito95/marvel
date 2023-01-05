import React from "react";
import "./styles.css";

const NavbarItem = (props) => {
  return (
    <a className="navbar-item" href={props.src}>
      {props.name}
    </a>
  );
};

export default NavbarItem;
