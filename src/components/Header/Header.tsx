import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Navigation />
      <img className="header__logo" src="/images/Logo.png" alt="logo chronos" />
    </HeaderStyled>
  );
};

export default Header;
