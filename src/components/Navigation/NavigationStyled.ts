import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav-button {
    padding: 6px;
  }

  .navigation-menu {
    background-color: ${({ theme }) => theme.color.backgroundMainDarkColor};
    width: 143px;
  }

  .navigation-menu__text {
    color: ${({ theme }) => theme.color.mainLightColor};
    border-top: solid 0.5px;
    padding: 7px;
    font-size: 14px;
  }

  .navigation-menu__link {
    color: ${({ theme }) => theme.color.backgroundMustardColor};
  }

  .open-menu-icon {
    color: ${({ theme }) => theme.color.mainLightColor};
  }

  .closed-menu-icon {
    color: ${({ theme }) => theme.color.mainLightColor};
  }

  .active {
    color: ${({ theme }) => theme.color.backgroundMustardColor};
  }
`;

export default NavigationStyled;
