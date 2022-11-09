// Import des module de react
import React from "react";
import { Link, NavLink } from "react-router-dom";

// Import des fichiers
import logo from "../../assets/logo.png";

// Import des styles
import "../../style/components/_header.scss";

function Header() {
  /******** Active Link **********/

  return (
    <header className="kasa_container">
      <Link to="/">
        <img
          className="kasa_container_logo"
          src={logo}
          alt="logo de l'agence kasa"
        />
      </Link>

      <nav className="kasa_container_navbar">
        <ul className="kasa_container_items">
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            end
            to="/"
          >
            Accueil
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            A Propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
