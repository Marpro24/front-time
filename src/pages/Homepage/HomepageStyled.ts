import styled from "styled-components";

const HomepageStyled = styled.main`
  .hero {
    width: 100vw;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;

    &__title {
      font-size: 1.1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.color.mainLightColor};
      margin-top: 68px;
    }

    &__join-button {
      font-weight: 100;
      margin-top: 45px;
      width: 80px;
      font-size: 0.8rem;
    }

    &__image {
      background-image: url("/images/homepage-hero-1.webp");
      background-size: 100vw;
      height: 200px;
      margin-top: 32px;
      opacity: 0.6;
      z-index: -1;
      background-position: top;
      position: relative;
      object-fit: cover;
      background-repeat: no-repeat;
    }
  }

  @media (min-width: 400px) {
    .hero {
      &__image {
        background-image: url("/images/homepage-hero-2.webp");
        height: 350px;
        width: 100%;
      }
    }
  }

  @media (min-width: 700px) {
    .hero {
      &__image {
        background-image: url("/images/homepage-hero-3.webp");
        height: 500px;
      }
    }
  }

  @media (min-width: 380px) {
    .hero {
      &__title {
        font-size: 1.3rem;
        margin-top: 72px;
      }

      &__join-button {
        margin-top: 50px;
        width: 85px;
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 420px) {
    .hero {
      &__title {
        font-size: 1.5rem;
        margin-top: 76px;
      }

      &__join-button {
        margin-top: 55px;
        width: 90px;
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 490px) {
    .hero {
      &__title {
        font-size: 1.7rem;
        margin-top: 85px;
      }

      &__join-button {
        margin-top: 65px;
        width: 100px;
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 560px) {
    .hero {
      &__title {
        font-size: 1.9rem;
        margin-top: 92px;
      }

      &__join-button {
        margin-top: 75px;
        width: 105px;
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 660px) {
    .hero {
      &__title {
        font-size: 2.2rem;
        margin-top: 105px;
      }

      &__join-button {
        margin-top: 90px;
        width: 115px;
        height: 40px;
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: 750px) {
    .hero {
      &__title {
        font-size: 2.5rem;
        margin-top: 115px;
      }

      &__join-button {
        margin-top: 105px;
      }
    }
  }

  @media (min-width: 840px) {
    .hero {
      &__title {
        font-size: 2.8rem;
        margin-top: 125px;
      }

      &__join-button {
        margin-top: 120px;
      }
    }
  }

  @media (min-width: 950px) {
    .hero {
      &__title {
        font-size: 3rem;
        margin-top: 140px;
      }

      &__join-button {
        margin-top: 130px;
      }
    }
  }

  @media (min-width: 1030px) {
    .hero {
      &__title {
        font-size: 3.5rem;
        margin-top: 175px;
      }

      &__join-button {
        margin-top: 170px;
        width: 130px;
        height: 50px;
        font-size: 1.6rem;
      }
    }
  }
`;

export default HomepageStyled;
