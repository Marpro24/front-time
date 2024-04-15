import styled from "styled-components";

const HomepageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.shellColor};
`;

export default HomepageStyled;
