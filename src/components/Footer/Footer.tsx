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
        <a
          target="_blank"
          className="redes__icon--tw"
          href="https://twitter.com/i/flow/login"
        >
          <FaTwitter className="logo logo--tw" />
        </a>
        <a
          target="_blank"
          className="redes__icon-ig"
          href="https://www.instagram.com/"
        >
          <FaInstagram className="logo logo--ig" />
        </a>
        <a
          target="_blank"
          className="redes__icon-fb"
          href="https://www.facebook.com/"
        >
          <FaFacebook className="logo logo--fb" />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
