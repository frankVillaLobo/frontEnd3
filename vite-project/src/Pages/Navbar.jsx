import React from "react";
import { Link } from "react-router-dom";
import {routes} from "../Utils/routes.js"

export default function Navbar() {
  // para todo lo que es ruteo interno es con el elemnto de react router dom. ya para el resto de cosas 
  return (
    <nav className="nav-bar">
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
      <h4>Contact</h4>
      </Link>
      <Link to={routes.shop}>
      <h4>Shop</h4>
      </Link>
    </nav>
  );
}
