import "./Leftmenu.css";
import { NavLink } from "react-router-dom";

export const Leftmenu = () => {
  return (
    <div>
      <h4 className="alert-danger text-center">Menu</h4>
      <br />

      <div className=" text-center">
        <NavLink style={{ textDecoration: "none" }} to="/addnote">
          Add note 
        </NavLink>
        <br />

        <NavLink style={{ textDecoration: "none" }} to="/viewnote">
          View note
        </NavLink>
      </div>
    </div>
  );
};
