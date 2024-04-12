import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    width: 100%;
    background-color: ${({ theme }) => theme.color.shellColor};
  }

  .navigation__text {
    color: ${({ theme }) => theme.color.mainLightColor};
  }
  .open-menu-icon {
    color: ${({ theme }) => theme.color.mainLightColor};
  }

  .closed-menu-icon {
    color: ${({ theme }) => theme.color.mainLightColor};
    z-index: 1;
  }

  .active {
    color: ${({ theme }) => theme.color.buttonColor};
  }
`;

export default NavigationStyled;
