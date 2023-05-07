import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Title.css";

function Title() {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section className="title" initial="hidden" whileInView="visible">
      <div className="title__container">
        <motion.h2
          className="title__subtitle"
          custom={1}
          variants={textAnimation}
        >
          Испытай банановое{" "}
          <span className="title__subtitle_span">счастье</span>
        </motion.h2>
        <motion.h1
          className="title__title_span"
          custom={1.5}
          variants={textAnimation}
        >
          BGHack
        </motion.h1>
        <motion.h1
          className="title__title"
          custom={1.5}
          variants={textAnimation}
        >
          ПРИВАТНЫЕ ЧИТЫ
        </motion.h1>
        <motion.p className="title__text" custom={2} variants={textAnimation}>
          Зайдите в каталог, и выберите для себя уникальный софт!
        </motion.p>
        <motion.div custom={2.5} variants={textAnimation}>
          <NavLink className="title__link" to="/catalog">
            <button className="title__button">Каталог</button>
          </NavLink>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Title;
