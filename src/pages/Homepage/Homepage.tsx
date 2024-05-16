import Button from "../../components/Button/Button";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <div className="hero">
        <h1 className="hero__title">¡Ha llegado la revolución del tiempo!</h1>
        <Button text="Únete" type="button" className="hero__join-button" />
      </div>
      <section className="about-us">
        <span className="about-us__title">
          ¡Bienvenido a la comunidad Chronos!
        </span>
        <p className="about-us__description">
          Chronos es una plataforma comunitaria donde los participantes ofrecen
          sus servicios a otros miembros de la comunidad. Estos servicios pueden
          variar desde tutoría hasta cuidado de niños, reparaciones en el hogar,
          jardinería, enseñanza de idiomas y más. Chronos nace de un deseo de
          fomentar la colaboración, el intercambio de habilidades y el
          fortalecimiento de los lazos comunitarios, creando una red de apoyo
          mutuo basada en el tiempo y las habilidades de sus miembros.
        </p>
      </section>
    </HomepageStyled>
  );
};

export default Homepage;
