import React from "react";
import { NavLink} from "react-router-dom";
import "./SidebarButton.css";

export default function SidebarButton(props) {

  return (

          <NavLink to={props.to}>
          <div className="sidebarButton-container">
            <div className="sidebarButton">
              {props.icon} {props.title}
            </div>
          </div>

          </NavLink>
  );
}
