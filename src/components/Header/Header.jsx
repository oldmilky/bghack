import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO.svg";
import catalog from "../../images/header__catalog.svg";
import discord from "../../images/header__discord.svg";
import faq from "../../images/header__faq.svg";
import home from "../../images/header__home.svg";
import telegram from "../../images/header__telegram.svg";
import warranty from "../../images/header__warranty.svg";
import "./Header.css";

function Header() {
  const textAnimation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.header initial="hidden" whileInView="visible" className="header">
      <motion.div
        className="header__container"
        custom={1}
        variants={textAnimation}
      >
        <div className="header__wrap">
          <NavLink className="header__link" to="/">
            <div className="header__wrapper">
              <img className="header__home_image" src={home} alt="home" />
              <p className="header__home">Главная</p>
            </div>
          </NavLink>
          <NavLink className="header__link" to="/catalog">
            <div className="header__wrapper">
              <img className="header__home_image" src={catalog} alt="catalog" />
              <p className="header__home">Каталог</p>
            </div>
          </NavLink>
          <NavLink className="header__link" to="/warranty">
            <div className="header__wrapper">
              <img
                className="header__home_image"
                src={warranty}
                alt="warranty"
              />
              <p className="header__home">Гарантии</p>
            </div>
          </NavLink>
        </div>
        <NavLink className="header__link" to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </NavLink>
        <div className="header__wrap">
          <NavLink className="header__link" to="/faq">
            <div className="header__wrapper_faq">
              <img className="header__home_image" src={faq} alt="faq" />
              <p className="header__home">FAQ</p>
            </div>
          </NavLink>
          <div className="header__wrapper">
            <a
              className="header__contact_link"
              href="https://discord.gg/ZZrGeRAKR8"
              target="_blank"
              rel="noreferrer"
            >
              <img className="header__contact" src={discord} alt="discord" />
            </a>
            <a
              className="header__contact_link"
              href="https://t.me/+4M4G26Q2Gqc4ZDM6"
              target="_blank"
              rel="noreferrer"
            >
              <img className="header__contact" src={telegram} alt="telegram" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
