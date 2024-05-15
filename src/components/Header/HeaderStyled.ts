import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.backgroundMainDarkColor};
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;

  .header__link {
    z-index: 10;

    &--logo {
      object-fit: cover;
      margin-top: -15px;
    }
  }
`;

export default HeaderStyled;
