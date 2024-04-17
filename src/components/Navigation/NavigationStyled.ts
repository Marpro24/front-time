import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;

  .navigation {
    background-color: ${({ theme }) => theme.color.shellColor};
    padding: 10px;
    margin-top: 140px;
    z-index: 1;
  }

  .navigation__text {
    color: ${({ theme }) => theme.color.mainLightColor};
  }

  .navigation__text {
    border-top: solid 0.5px;
  }

  .open-menu-icon {
    color: ${({ theme }) => theme.color.mainLightColor};
  }

  .closed-menu-icon {
    color: ${({ theme }) => theme.color.mainLightColor};
  }

  .active {
    color: ${({ theme }) => theme.color.buttonColor};
  }
`;

export default NavigationStyled;
