import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: ${({ theme }) => theme.color.shellColor};
  color: ${({ theme }) => theme.color.mainLightColor};
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 57px;
  font-size: 1rem;
  width: 100%;

  .logo {
    height: inherit;
    width: 2rem;

    &--tw {
      margin-right: 45px;
      color: #1c96e8;
    }

    &--ig {
      margin-right: 45px;
      background: linear-gradient(#bb009a, #eb0006, #f5b118);
      border-radius: 5px;
    }

    &--fb {
      color: #0863f7;
    }
  }
`;

export default FooterStyled;
