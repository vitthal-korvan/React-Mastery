import { NavLink } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div className="menu">
      <NavLink
        to="/"
        style={(e) => {
          return { color: e.isActive ? "red" : "black" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "red" : "black" };
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "red" : "black" };
        }}
        to="/service"
      >
        Service
      </NavLink>
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "red" : "black" };
        }}
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;
