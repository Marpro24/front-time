import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterStyled from "./FooterStyled";

const Footer = (): React.ReactElement => {
  return (
    <FooterStyled className="footer">
      <span className="footer__copy">©Chronos 2024</span>
      <a className="footer__contacto" href="">
        <span>Contacto</span>
      </a>
      <span className="footer__siguenos">Síguenos en</span>
      <div className="redes__icon">
        <a target="_blank" href="https://twitter.com/i/flow/login">
          <FaTwitter
            aria-label="logo twitter"
            className="redes__icon--all redes__icon--tw"
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <FaInstagram
            aria-label="logo instagram"
            className="redes__icon--all redes__icon--ig"
          />
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <FaFacebook
            aria-label="logo facebook"
            className="redes__icon--all redes__icon--fb"
          />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
