import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.backgroundMainDarkColor};
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .header__logo {
    object-fit: cover;
    margin-top: -15px;
  }
`;

export default HeaderStyled;
