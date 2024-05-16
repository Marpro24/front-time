import styled from "styled-components";

const HomepageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/images/homepage-hero-1.webp");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 32px;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 0;
    margin-bottom: 30px;

    &__title {
      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.color.mainLightColor};
      margin: 35px 5px 0 5px;
    }

    &__join-button {
      font-weight: 100;
      width: 80px;
      font-size: 0.8rem;
      margin-top: 30px;
    }
  }

  .about-us {
    margin: 30px 10px 30px 10px;
    padding: 30px 15px;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 4px ${({ theme }) => theme.color.backgroundDarkColor};
  }

  @media (min-width: 400px) {
    background-image: url("/images/homepage-hero-2.webp");
  }

  @media (min-width: 700px) {
    background-image: url("/images/homepage-hero-3.webp");
  }

  @media (min-width: 380px) {
    .hero {
      &__title {
        font-size: 1.2rem;
        margin-top: 43px;
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
        font-size: 1.3rem;
        margin-top: 47px;
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
        font-size: 1.5rem;
        margin-top: 55px;
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
        font-size: 1.7rem;
        margin-top: 60px;
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
        font-size: 2rem;
        margin-top: 70px;
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
        font-size: 2.2rem;
        margin-top: 80px;
      }

      &__join-button {
        margin-top: 105px;
      }
    }
  }

  @media (min-width: 840px) {
    .hero {
      &__title {
        font-size: 2.5rem;
        margin-top: 90px;
      }

      &__join-button {
        margin-top: 120px;
      }
    }
  }

  @media (min-width: 950px) {
    .hero {
      &__title {
        font-size: 2.9rem;
        margin-top: 105px;
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
        margin-top: 150px;
      }

      &__join-button {
        margin-top: 170px;
        width: 130px;
        height: 50px;
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 350px) {
    .about-us {
      margin-top: 50px;
    }
  }

  @media (min-width: 500px) {
    .about-us {
      margin: 80px 20px;
    }
  }

  @media (min-width: 600px) {
    .about-us {
      margin: 110px 30px;
    }
  }

  @media (min-width: 800px) {
    .about-us {
      margin: 150px 30px;
    }
  }

  @media (min-width: 1000px) {
    .about-us {
      margin: 190px 30px;
    }
  }

  @media (min-width: 1030px) {
    .about-us {
      margin: 200px 30px;
    }
  }
`;

export default HomepageStyled;
