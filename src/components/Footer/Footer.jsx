import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import vk from "../../images/footer__vk.svg";
import discord from "../../images/header__discord.svg";
import telegram from "../../images/header__telegram.svg";
import PopupContacts from "../Popup/PopupContacts";
import "./Footer.css";

function Footer() {
  const textAnimation = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const [popupContactsActive, setPopupContactsActive] = useState(false);

  return (
    <motion.footer className="footer" initial="hidden" whileInView="visible">
      <div className="footer__container">
        <div className="footer__wrap">
          <motion.h1
            className="footer__title"
            custom={1}
            variants={textAnimation}
          >
            Навигация
          </motion.h1>
          <motion.div
            className="footer__motion_text"
            custom={2}
            variants={textAnimation}
          >
            <NavLink className="footer__link_text" to="/catalog">
              <p className="footer__text">Каталог игр</p>
            </NavLink>
          </motion.div>
          <motion.div
            className="footer__motion_text"
            custom={2}
            variants={textAnimation}
          >
            <NavLink className="footer__link_text" to="/faq">
              <p className="footer__text">FAQ</p>
            </NavLink>
          </motion.div>
          <motion.div
            className="footer__motion_text"
            custom={2}
            variants={textAnimation}
          >
            <p className="footer__text" onClick={setPopupContactsActive}>
              Контакты
            </p>
          </motion.div>
        </div>
        <div className="footer__wrap">
          <motion.h1
            className="footer__title"
            custom={1}
            variants={textAnimation}
          >
            Другое
          </motion.h1>
          <motion.div
            className="footer__motion_text"
            custom={2}
            variants={textAnimation}
          >
            <NavLink className="footer__link_text" to="/privacy">
              <p className="footer__text">Политика конфиденциальности</p>
            </NavLink>
          </motion.div>
          <motion.div
            className="footer__motion_text"
            custom={2}
            variants={textAnimation}
          >
            <NavLink className="footer__link_text" to="/warranty">
              <p className="footer__text">Гарантии</p>
            </NavLink>
          </motion.div>
          <motion.div
            className="footer__motion_text"
            custom={2}
            variants={textAnimation}
          >
            <p className="footer__text" onClick={setPopupContactsActive}>
              Поддержка
            </p>
          </motion.div>
        </div>
        <div className="footer__wrap_contact">
          <motion.h1
            className="footer__title"
            custom={1}
            variants={textAnimation}
          >
            Будьте с нами
          </motion.h1>
          <motion.div
            className="footer__wrapper"
            custom={2}
            variants={textAnimation}
          >
            <a
              className="footer__link"
              href="https://discord.gg/ZZrGeRAKR8"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__contact" src={discord} alt="discord" />
            </a>
            <a
              className="footer__link"
              href="https://t.me/+4M4G26Q2Gqc4ZDM6"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__contact" src={telegram} alt="telegram" />
            </a>
            <a
              className="footer__link"
              href="https://vk.com/public220360828"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__contact" src={vk} alt="vk" />
            </a>
          </motion.div>
        </div>
      </div>
      <PopupContacts
        active={popupContactsActive}
        setActive={setPopupContactsActive}
      />
    </motion.footer>
  );
}

export default Footer;
