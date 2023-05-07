import { motion } from "framer-motion";
import { useEffect } from "react";
import digisellerIcon from "../../images/warranty__digiseller.svg";
import reliabilityIcon from "../../images/warranty__reliability.svg";
import returnIcon from "../../images/warranty__return.svg";
import reviewsIcon from "../../images/warranty__reviews.svg";
import supportIcon from "../../images/warranty__support.svg";
import updateIcon from "../../images/warranty__update.svg";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./Warranty.css";

function Warranty() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
    <>
      <Header />
      <Nav title="Гарантии" link="/warranty" />
      <motion.section initial="hidden" whileInView="visible" className="warranty">
        <div className="warranty__container">
          <motion.div className="warranty__wrap" custom={1} variants={textAnimation}>
            <img className="warranty__icon" src={returnIcon} alt="return" />
            <h1 className="warranty__title">Возрат</h1>
            <p className="warranty__subtitle">
              На нашем сайте существует гарантия возврата денежных средств в
              случае, если купленный вами товар на нашем сайте не работает
            </p>
          </motion.div>

          <motion.div className="warranty__wrap" custom={1.5} variants={textAnimation}>
            <img className="warranty__icon" src={supportIcon} alt="support" />
            <h1 className="warranty__title">Поддержка</h1>
            <p className="warranty__subtitle">
              Мы предоставляем нашим пользователям бесплатную техническую
              поддержку
            </p>
          </motion.div>

          <motion.div className="warranty__wrap" custom={2} variants={textAnimation}>
            <img
              className="warranty__icon"
              src={reliabilityIcon}
              alt="reliability"
            />
            <h1 className="warranty__title">Надежность</h1>
            <p className="warranty__subtitle">
              Все наши софты созданны надежными разработчиками которые постоянно
              обновляют свои продукты
            </p>
          </motion.div>

          <motion.div className="warranty__wrap" custom={2.5} variants={textAnimation}>
            <img className="warranty__icon" src={reviewsIcon} alt="reviews" />
            <h1 className="warranty__title">Отзывы</h1>
            <p className="warranty__subtitle">
              У нас есть страничка на Funpay где вы сможете увидеть отзывы о нас
              и наших товарах{" "}
              <a
                className="warranty__link"
                href="https://funpay.com/users/3080641/"
                target="_blank"
                rel="noreferrer"
              >
                Ссылка
              </a>
            </p>
          </motion.div>

          <motion.div className="warranty__wrap" custom={3} variants={textAnimation}>
            <img
              className="warranty__icon"
              src={digisellerIcon}
              alt="digiseller"
            />
            <h1 className="warranty__title">Digiseller</h1>
            <p className="warranty__subtitle">
              Вы всегда можете написать свой отзыв на сайте Digiseller, а также
              запросить возврат в случае неработоспособности
            </p>
          </motion.div>

          <motion.div className="warranty__wrap" custom={3.5} variants={textAnimation}>
            <img className="warranty__icon" src={updateIcon} alt="update" />
            <h1 className="warranty__title">Обновления</h1>
            <p className="warranty__subtitle">
              Наши продукты быстро, а главное постоянно обновляются, что
              обеспечивает их непрерывную работу
            </p>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Warranty;
