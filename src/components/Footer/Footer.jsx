import { NavLink } from "react-router-dom";
import vk from "../../images/footer__vk.svg";
import discord from "../../images/header__discord.svg";
import telegram from "../../images/header__telegram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrap">
          <h1 className="footer__title">Навигация</h1>
          <NavLink className="footer__link_text" to="/catalog">
            <p className="footer__text">Каталог игр</p>
          </NavLink>
          <NavLink className="footer__link_text" to="/faq">
            <p className="footer__text">FAQ</p>
          </NavLink>
          <NavLink className="footer__link_text" to="/contacts">
            <p className="footer__text">Контакты</p>
          </NavLink>
        </div>
        <div className="footer__wrap">
          <h1 className="footer__title">Другое</h1>
          <NavLink className="footer__link_text" to="/privacy">
            <p className="footer__text">Политика конфиденциальности</p>
          </NavLink>
          <NavLink className="footer__link_text" to="/warranty">
            <p className="footer__text">Гарантии</p>
          </NavLink>
          <NavLink className="footer__link_text" to="/support">
            <p className="footer__text">Поддержка</p>
          </NavLink>
        </div>
        <div className="footer__wrap_contact">
          <h1 className="footer__title">Будьте с нами</h1>
          <div className="footer__wrapper">
            <a
              className="footer__link"
              href="aa"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__contact" src={discord} alt="discord" />
            </a>
            <a
              className="footer__link"
              href="aa"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__contact" src={telegram} alt="telegram" />
            </a>
            <a
              className="footer__link"
              href="aa"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__contact" src={vk} alt="vk" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
