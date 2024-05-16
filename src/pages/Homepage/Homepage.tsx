import Button from "../../components/Button/Button";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <div className="hero">
        <span className="hero__title">
          ¡Ha llegado la revolución del tiempo!
        </span>
        <Button text="Únete" type="button" className="hero__join-button" />
      </div>
      <div className="hero__image" />
    </HomepageStyled>
  );
};

export default Homepage;
