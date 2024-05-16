import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 105px;
  height: 35px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.backgroundMustardColor};
  color: ${({ theme }) => theme.color.mainLightColor};
`;

export default ButtonStyled;
