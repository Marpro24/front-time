import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Navigation />
      <Link className="header__link" to={"/home"}>
        <img
          className="header__link--logo"
          src="/images/CHRONOS-logo.webp"
          alt="logo chronos"
          width="113"
          height="68"
        />
      </Link>
    </HeaderStyled>
  );
};

export default Header;
