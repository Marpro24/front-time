import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavigationStyled>
      {!isNavOpen ? (
        <button className="nav-button" onClick={toggleNav}>
          <FaBars className="open-menu-icon" />
        </button>
      ) : (
        ""
      )}

      {isNavOpen ? (
        <button className="nav-button" onClick={toggleNav}>
          <FaTimes className="closed-menu-icon" />
        </button>
      ) : (
        ""
      )}
      {isNavOpen ? (
        <ul className="navigation">
          <li className="navigation__text">
            <a href="/home">Inicio</a>
          </li>
          <li className="navigation__text">
            <a href="/">Sobre nosotras</a>
          </li>
          <li className="navigation__text">
            <a href="/">Categorías</a>
          </li>
          <li className="navigation__text">
            <a href="/">Donar horas</a>
          </li>
          <li className="navigation__text">
            <a href="/">Contacto</a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </NavigationStyled>
  );
};

export default Navigation;
