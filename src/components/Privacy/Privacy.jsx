import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./Privacy.css";

function Privacy() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <Nav title="Политика конфиденциальности" link="/privacy" />
      <motion.section
        className="privacy"
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1
          className="privacy__title"
          custom={1}
          variants={textAnimation}
        >
          Пользовательское соглашение
        </motion.h1>
        <div className="privacy__container">
          <motion.p custom={1.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">1.1.</span> Использование сервиса
            регулируется условиями соглашения, ознакомление с которыми
            обязательно.
          </motion.p>
          <motion.p custom={1.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">1.2.</span> При покупке на сайте
            товара и при последующем использовании этого товара пользователь
            сервиса (далее — пользователь) считается ознакомленным и согласным с
            условиями использования сервиса.
          </motion.p>
          <motion.p custom={1.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">1.3.</span> При необходимости
            условия могут быть изменены либо дополнены.
          </motion.p>
          <motion.p custom={1.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">1.4.</span> Незнание условий
            соглашения не освобождает от ответственности.
          </motion.p>
          <motion.h2
            className="privacy__subtitle"
            custom={2}
            variants={textAnimation}
          >
            Сервис bghack
          </motion.h2>
          <motion.p custom={2.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">2.1.</span> Относящийся к сайту{" "}
            <span className="privacy__span">bghack.xyz</span> и сервису bghack
            контент(в т.ч. товары) предназначен для личного некоммерческого
            использования без публикации, передачи и обмена.
          </motion.p>
          <motion.p custom={2.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">2.2</span> Обход, удаление,
            изменение, деактивация, ухудшение либо нарушение защиты контента в
            сервисе, а также декомпиляция, обратный инжинирнг и
            дизассемблирование любого программного обеспечения и других
            продуктов или процессов запрещены.
          </motion.p>
          <motion.h2
            className="privacy__subtitle"
            custom={3}
            variants={textAnimation}
          >
            Основные права и ответственность
          </motion.h2>
          <motion.p custom={3.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">3.1.</span> Администрация проекта
            bghack (далее — администрация) не несет ответственности за
            ненадлежащее использование сервиса.
          </motion.p>
          <motion.p custom={3.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">3.2.</span> Данный сайт, вся
            содержащаяся здесь информация и материалы представлены по принципу
            \"as is\" (как есть).
          </motion.p>
          <motion.p custom={3.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">3.3.</span> Администрация и партнеры
            проекта не несут ответственность за прямой, косвенный, случайный или
            иной вид ущерба (включая любого рода блокировки) от использования
            или невозможности использования купленных товаров, а также
            материалов или функционала данного сайта.
          </motion.p>
          <motion.p custom={3.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">3.4.</span> С возникшими вопросами о
            покупке и работе товаров пользователь имеет право обратиться в
            техническую поддержку.
          </motion.p>
          <motion.p custom={3.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">3.5.</span> Администрация оставляет
            за собой право заблокировать любую подписку, ключ или учетную запись
            вследствие нарушение условий соглашения без объяснения причин. При
            блокировке учетной записи ее владелец имеет право обратиться в
            техническую поддержку.
          </motion.p>
          <motion.h2
            className="privacy__subtitle"
            custom={4}
            variants={textAnimation}
          >
            Возврат средств
          </motion.h2>
          <motion.p custom={4.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">4.1.</span> Возврат средств за товар
            возможен в тех случаях, когда: - подписка на ПО не была
            активирована;
          </motion.p>
          <motion.p className="privacy__text" custom={4.5} variants={textAnimation}>
            <span className="privacy__span">4.2.</span> Возврат средств за товар
            НЕ осуществляется, если: - версия ОС на пользовательском ПК не
            соответствует требованиям товара; - пользователь приобрел не тот
            товар; - работа приобретенного ПО по каким-либо причинам была
            приостановлена на определенный или неопределенный срок; -
            пользователь купил ПО, доступ к использованию которым был
            заблокирован; - была проведена попытка взлома лаунчера ПО; -
            пользователь пытался использовать товар в гостях, компьютерном клубе
            и в других подобных местах на чужом ПК;
          </motion.p>
          <motion.p custom={4.5} variants={textAnimation} className="privacy__text">
            <span className="privacy__span">4.3.</span> Компенсация может быть
            проведена только в случае, если администрация сочтет это необходимым
          </motion.p>
        </div>
      </motion.section>
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Privacy;
