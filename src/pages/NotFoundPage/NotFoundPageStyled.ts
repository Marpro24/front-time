import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .not-found {
    &__post-it {
      margin-top: 50px;
      position: relative;
      object-fit: contain;
    }

    &__text {
      font-family: ${({ theme }) => theme.font.notFoundFontFamily};
      font-weight: 100;
      position: absolute;
      transform: rotate(-5deg);
      margin-left: 30px;

      &-text {
        text-transform: uppercase;
        margin-top: 208px;
        font-size: 2.3rem;
      }

      &-404 {
        font-size: 3.8rem;
        margin-top: 300px;
      }
    }
  }

  @media (max-width: 488px) {
    .not-found__text {
      &-text {
        font-size: 2.2rem;
        margin-top: 210px;
      }
    }
  }

  @media (max-width: 465px) {
    .not-found__text {
      &-text {
        font-size: 2rem;
        margin-top: 215px;
      }
    }
  }

  @media (max-width: 416px) {
    .not-found__text {
      &-text {
        font-size: 1.7rem;
        margin-top: 220px;
      }

      &-404 {
        font-size: 3.3rem;
      }
    }
  }

  @media (max-width: 369px) {
    .not-found__text {
      &-text {
        font-size: 1.5rem;
        margin-top: 230px;
      }

      &-404 {
        font-size: 3rem;
      }
    }
  }
`;

export default NotFoundPageStyled;
