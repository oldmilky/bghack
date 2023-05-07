import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO.svg";
import "./Footer.css";

function FooterAuthor() {
  const textAnimation = {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      className="footer__author"
    >
      <div className="footer__container_author">
        <div className="footer__author_wrap-bg">
          <motion.p
            custom={1}
            variants={textAnimation}
            className="footer__author_text"
          >
            Copyright © 2023 <span className="footer__author_span">BGHack</span>{" "}
            Shop All Rights Reserved.
          </motion.p>
        </div>
        <motion.div custom={1} variants={textAnimation}>
          <NavLink className="footer__Link" to="/">
            <img className="footer__logo" src={logo} alt="footerLogo" />
          </NavLink>
        </motion.div>
        <motion.div className="footer__author_wrap" custom={1} variants={textAnimation}>
          <p className="footer__author_text-dev">
            Develop and design:{" "}
            <a
              className="footer__link"
              href="https://t.me/rodion914"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer__author_span">oldmilky</span>
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default FooterAuthor;
