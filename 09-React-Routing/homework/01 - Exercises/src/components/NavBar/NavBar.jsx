import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { navLinck } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <navLinck to="/">
            <img src={logoHenry} alt="logo-henry" />
          </navLinck>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <navLinck to="/shipping">
              <span>Navieras</span>
            </navLinck>
          </li>
          <li>
            <navLinck to = "/promotions">
              <span>Promociones</span>
            </navLinck>
          </li>
        </div>
      </ul>
    </div>
  );
}
