import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.shellColor};
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 10px;

  .header__logo {
    padding-top: 2.1rem;
    object-fit: cover;
    width: 126px;
  }
`;

export default HeaderStyled;
