import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import NavigationStyled from "./NavigationStyled";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/home">Inicio</NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink to="/">Sobre nosotras</NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink to="/">Categorías</NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink to="/">Donar horas</NavLink>
          </li>
          <li className="navigation-menu__text">
            <NavLink to="/">Contacto</NavLink>
          </li>
        </ul>
      ) : (
        ""
      )}
    </NavigationStyled>
  );
};

export default Navigation;
