import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./Faq.css";

function Faq() {
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
      <Nav title="FAQ" link="/faq" />
      <motion.section className="faq" initial="hidden" whileInView="visible">
        <div className="faq__container">
          <motion.h1 className="faq__title" custom={1} variants={textAnimation}>
            Что делать, если у вас не работает чит?
          </motion.h1>
          <motion.h2
            className="faq__subtitle"
            custom={1.5}
            variants={textAnimation}
          >
            Начнём с того, что всё гораздо проще, чем вы думаете. Большинство
            ошибок берутся из-за того, что программе что-то мешает.
          </motion.h2>
          <motion.div custom={2} variants={textAnimation}>
            <p className="faq__text">
              <span className="faq__span">1.</span> Необходимо УДАЛИТЬ
              антивирус. Не стоит пренебрегать этим пунктом и просто его
              отключать. Зачастую защитные службы работают в фоновом режиме и
              отключение не даёт никакого результата. После удаления
              перезагружаете ваш компьютер, что бы изменения вступили в силу.
            </p>
            <p className="faq__text">
              <span className="faq__span">2.</span> Далее, вам необходимо
              отключить Windows Defender. Эта стандартная защита операционной
              системы. Она так же станет преградой между вами и рабочим читом.
              Открываете Пуск {">"} Параметры {">"} Обновление и безопасность{" "}
              {">"}
              Безопасность Windows {">"} Защита от вирусов и угроз {">"}{" "}
              Управление параметрами (или Параметры защиты от вирусов и угроз)
              Выберите для параметра Защита в режиме реального времени значение
              Выкл / Откл.
            </p>
            <p className="faq__text">
              <span className="faq__span">3.</span> Для закрепления результата
              отключения защитников скачиваете программу Defender Control
              [Пароль от архива 777]. В работе я ей пользуюсь чаще всего. И
              нажмите кнопку Disable Windows Defender.{" "}
              <a
                className="faq__link"
                href="https://disk.yandex.ru/d/W3IDHF-ALNSh9Q"
                target="_blank"
                rel="noreferrer"
              >
                Ссылка на скачивание
              </a>
            </p>
            <p className="faq__text">
              <span className="faq__span">4.</span> После чего, рекомендую
              воспользоваться утилитой, которая отключит вам защитные службы и
              обновления Windows. Почему не стоит обновлять свою операционную
              систему? Зачастую, после того, как Microsoft выпускают новый патч
              своей ОС читы перестают работать на ПК. Это связано с тем, что их
              необходимо дополнительно оптимизировать под обновление. Скачать
              утилиту сможете по ссылке.{" "}
              <a
                className="faq__link"
                href="https://disk.yandex.ru/d/enmHkEYFMK0SQA"
                target="_blank"
                rel="noreferrer"
              >
                Ссылка на скачивание
              </a>{" "}
              Открываете вкладку Disable, выставляете все галочки, жмёте Apply
              Now и отправляете компьютер на перезагрузку. Если в дальнейшем
              необходимо будет включить защитники, их можно запустить через эту
              же утилиту - вкладка Enable.
            </p>
            <p className="faq__text">
              <span className="faq__span">5.</span> Есть программы, которые
              будут всячески мешать работе читов. В них встроены внутренние
              защитники и античиты. Их необходимо удалить. Вот их список:
              Valorant; Riot games; Malwarebytes; Иногда мешает VirtualBox;
              Faceit. Что делать, если он у вас уже установлен? Чаще всего его
              просто так не удалить из системы. Он сохраняет файлы, которые
              будут мешать. Переходите в панель управления - Программы и
              компоненты - Удаляете Faceit. Открываете командную строку, она же
              CMD от имени администратора. Пишете следующую команду: net stop
              FACEIT; Далее, переходите по пути: C:\Windows\System32\drivers;
              Удаляете файл: faceit.sys; Второй кнопкой мыши жмёте на диске С -
              свойства - очистка диска - очистка системных файлов [Выставить все
              галочки]. Выполнить, далее перезагрузить пк.
            </p>
            <p className="faq__text">
              <span className="faq__span">6.</span> Для работы читов необходим
              определённый набор компонентов. Это стандартные программы, которые
              и так должны быть у вас установлены. Раньше их выдавали вместе с
              компьютером на CD дисках. Скачать их сможете, воспользовавшись
              программой All in One Runtimes. Однозначно, утилита положительно
              повлияет на работу вашего компьютера. Так же, она поможет решить
              знаменитые ошибки, такие как не хватка msvcp140.dll, msvcp110.dll
              и других.{" "}
              <a
                className="faq__link"
                href="https://ivsofte.biz/notworking/AllinOneRuntimes.rar"
                target="_blank"
                rel="noreferrer"
              >
                Ссылка на скачивание
              </a>
            </p>
            <p className="faq__text">
              <span className="faq__span">7.</span> Должен быть выключен
              Брандмауэр Защитника Windows. Перейдите в Панель управления {">"}{" "}
              Все элементы панели управления {">"} Брандмауэр Защитника Windows{" "}
              {">"} Настроить параметры. И в обоих пунктах выбираете параметр
              "Отключить".
            </p>
          </motion.div>
          <motion.h2 className="faq__subtitle" custom={2.5} variants={textAnimation}>
            В случае, если вы выполнили все рекомендации, описанные выше, но у
            вас не заработала программа - Пишите в дискорд/телеграмм.
          </motion.h2>
        </div>
      </motion.section>
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Faq;
