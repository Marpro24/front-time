import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .not-found {
    &__post-it {
      margin: 50px 0 50px 0;
      position: relative;
      object-fit: contain;
      height: inherit;
    }

    &__text {
      font-family: ${({ theme }) => theme.font.notFoundFontFamily};
      font-weight: 100;
      position: absolute;
      transform: rotate(-5deg);
      margin-left: 30px;

      &--no-encontrada {
        text-transform: uppercase;
        margin-top: 180px;
        font-size: 2rem;
      }

      &--404 {
        font-size: 3.8rem;
        margin-top: 250px;
      }
    }
  }

  @media (max-width: 488px) {
    .not-found__text {
      &--no-encontrada {
        font-size: 1.8;
        margin-top: 180px;
      }
    }
  }

  @media (max-width: 465px) {
    .not-found__text {
      &--no-encontrada {
        font-size: 1.6;
        margin-top: 180px;
      }
    }
  }

  @media (max-width: 416px) {
    .not-found__text {
      &--no-encontrada {
        font-size: 1.7rem;
        margin-top: 180px;
      }

      &--404 {
        font-size: 3.3rem;
      }
    }
  }

  @media (max-width: 369px) {
    .not-found__text {
      &--no-encontrada {
        font-size: 1.5rem;
        margin-top: 190px;
      }

      &--404 {
        font-size: 3rem;
      }
    }
  }
`;

export default NotFoundPageStyled;
