import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavigationStyled>
      {!isNavOpen ? (
        <button
          aria-label="navigation menu button"
          className="nav-button"
          onClick={toggleNav}
        >
          <FaBars className="open-menu-icon" />
        </button>
      ) : (
        ""
      )}

      {isNavOpen ? (
        <button
          aria-label="navigation menu button"
          className="nav-button"
          onClick={toggleNav}
        >
          <FaTimes className="closed-menu-icon" />
        </button>
      ) : (
        ""
      )}
      {isNavOpen ? (
        <ul className="navigation-menu">
          <li className="navigation-menu__text">
            <NavLink aria-label="inicio" to="/home">
              Inicio
            </NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink aria-label="sobre-nosotros" to="/">
              Sobre nosotras
            </NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink aria-label="categorias" to="/">
              Categorías
            </NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink aria-label="donar-horas" to="/">
              Donar horas
            </NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink aria-label="contacto" to="/">
              Contacto
            </NavLink>
          </li>
        </ul>
      ) : (
        ""
      )}
    </NavigationStyled>
  );
};

export default Navigation;
