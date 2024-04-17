import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img className="header__logo" src="/images/Logo.png" alt="logo chronos" />
    </HeaderStyled>
  );
};

export default Header;
