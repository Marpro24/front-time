import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Link to={"/home"}>
        <img
          className="header__logo"
          src="/images/Logo.png"
          alt="logo chronos"
          width="113"
          height="68"
        />
      </Link>
    </HeaderStyled>
  );
};

export default Header;
