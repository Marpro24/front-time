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
  font-size: 0.6rem;
  width: 100%;

  .redes__icon {
    display: flex;
    align-items: center;
    gap: 7px;

    &--all {
      width: 1.2rem;
      height: inherit;
    }

    &--tw {
      color: #1c96e8;
    }

    &--ig {
      background: linear-gradient(#bb009a, #eb0006, #f5b118);
      border-radius: 7px;
    }

    &--fb {
      color: #0fa6f6;
    }
  }
  @media (min-width: 450px) {
    font-size: 0.9rem;

    .redes__icon {
      gap: 15px;

      &--all {
        width: 1.7rem;
        height: inherit;
      }
    }
  }

  @media (min-width: 720px) {
    .redes__icon {
      gap: 25px;
    }
  }

  @media (min-width: 870px) {
    .redes__icon {
      gap: 35px;
    }
  }
`;

export default FooterStyled;
