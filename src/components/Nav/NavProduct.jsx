import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import arrow from "../../images/nav__arrow.svg";
import home from "../../images/nav__home.svg";
import "./Nav.css";

function NavProduct({ title, link }) {
  const textAnimation = {
    hidden: {
      x: -80,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section className="nav" initial="hidden" whileInView="visible">
      <div className="nav__container">
        <NavLink className="nav__link" to="/">
          <motion.img
            custom={1}
            variants={textAnimation}
            className="nav__image_home"
            src={home}
            alt="home"
          />
        </NavLink>
        <motion.img
          custom={1}
          variants={textAnimation}
          className="nav__image_arrow"
          src={arrow}
          alt="arrow"
        />
        <NavLink className="nav__link" to="/catalog">
          <motion.p className="nav__text" custom={1.5} variants={textAnimation}>
            Каталог
          </motion.p>
        </NavLink>
        <motion.img
          className="nav__image_arrow"
          custom={1.5}
          variants={textAnimation}
          src={arrow}
          alt="arrow"
        />
        <NavLink className="nav__link" to={link}>
          <motion.p
            className="nav__text_inactive"
            custom={2}
            variants={textAnimation}
          >
            {title}
          </motion.p>
        </NavLink>
      </div>
    </motion.section>
  );
}

export default NavProduct;
