import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.shellColor};
  height: 32px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  .header__logo {
    object-fit: cover;
  }
`;

export default HeaderStyled;
