import React from "react";
import { NavLink } from "react-router-dom";
import Changeimg from "./Changeimg";

const ulstyle = {
  listStyleType: "none",
  display: "flex",
  alignContent: "center",
  lineHeight: "80px",
  width: "150px",
  justifyContent: "space-around"
};
const linkstyle = {
  textDecoration: "none",
  fontSize: "20px",
  display: "inline-block",
  width: "100%"
}
class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <ul style={ulstyle}>
          <li><NavLink exact to='/' style={linkstyle} activeStyle={{color: 'red'}}>popular</NavLink></li>
          <li><NavLink exact to='/battle' style={linkstyle} activeStyle={{color: 'red'}}>battle</NavLink></li>
        </ul>
        <Changeimg />
      </div>
    );
  }
}
export default Header;
