import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import aimbotIcon from "../../images/product__aimbot.svg";
import espIcon from "../../images/product__esp.svg";
import miscIcon from "../../images/product__misc.svg";
import osIcon from "../../images/product__os.svg";
import procIcon from "../../images/product__proc.svg";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import NavProduct from "../Nav/NavProduct";
import PopupClosed from "../Popup/PopupClosed";
import PopupImage from "../Popup/PopupImage";
import OnUpdate from "../Status/OnUpdate";
import Undetected from "../Status/Undetected";
import "./Product.css";

function Product() {
  const titleAnimation = {
    hidden: {
      x: 80,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const imgAnimation = {
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

  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const circleActiveColor = "product__order_point-active";
  const circleInactiveColor = "product__order_point";

  const plansActiveColor = "product__wrapper_order-active";
  const plansInactiveColor = "product__wrapper_order";

  const [cheat, setCheat] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://644ea5454e86e9a4d8fe278b.mockapi.io/data/" + id
        );
        setCheat(data);
      } catch (error) {
        console.log("Ошибка", error);
      }
    }
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const [show, setShow] = useState("week");

  useEffect(() => {
    if (cheat && cheat.day1) {
      setShow("day");
    } else if (cheat && cheat.day7) {
      setShow("week");
    } else if (cheat && cheat.day30) {
      setShow("mouth");
    }
  }, [cheat]);

  const handleDayClick = () => {
    setShow("day");
  };
  const handleWeekClick = () => {
    setShow("week");
  };
  const handleMouthClick = () => {
    setShow("mouth");
  };

  const [popupImageActive1, setPopupImageActive1] = useState(false);
  const [popupImageActive2, setPopupImageActive2] = useState(false);
  const [popupImageActive3, setPopupImageActive3] = useState(false);
  const [popupImageActive4, setPopupImageActive4] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  if (!cheat) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <NavProduct title={cheat.name} link={`/${cheat.gameTypeLink}/${id}`} />
      <motion.section
        className="product"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="product__container">
          <motion.div
            className="product__wrap_images"
            custom={1}
            variants={imgAnimation}
          >
            <div
              className="product__wrapper_image-first"
              onClick={() => setPopupImageActive1(true)}
            >
              <img
                className="product__image"
                src={cheat.image1}
                alt="MainPage"
              />
            </div>
            <div className="product__wrapper_images">
              {cheat.image2 ? (
                <div
                  className="product__wrapper_image-second"
                  onClick={() => setPopupImageActive2(true)}
                >
                  <img
                    className="product__image_mini"
                    src={cheat.image2}
                    alt="Second"
                  />
                </div>
              ) : (
                ""
              )}
              {cheat.image3 ? (
                <div
                  className="product__wrapper_image-second"
                  onClick={() => setPopupImageActive3(true)}
                >
                  <img
                    className="product__image_mini"
                    src={cheat.image3}
                    alt="Second"
                  />
                </div>
              ) : (
                ""
              )}
              {cheat.image4 ? (
                <div
                  className="product__wrapper_image-second"
                  onClick={() => setPopupImageActive4(true)}
                >
                  <img
                    className="product__image_mini"
                    src={cheat.image4}
                    alt="Second"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </motion.div>

          <motion.div
            className="product__wrap"
            custom={1}
            variants={textAnimation}
          >
            <div className="product__wrapper">
              <img className="product__logo" src={cheat.logoGame} alt="logo" />
              <h1 className="product__title">{cheat.name}</h1>
            </div>
            {cheat.status === "Undetected" ? <Undetected /> : <OnUpdate />}
            <p className="product__text">{cheat.desc}</p>
          </motion.div>

          <motion.div
            className="product__wrap_order"
            custom={1}
            variants={titleAnimation}
          >
            <h2 className="product__order_title">
              <span className="product__order_span">Оформление</span> заказа
            </h2>
            <div className="product__container_order">
              {cheat.day1 ? (
                <div
                  className={
                    show === "day" ? plansActiveColor : plansInactiveColor
                  }
                  onClick={handleDayClick}
                >
                  <div className="product__wrapper_order-days">
                    <div
                      className={
                        show === "day" ? circleActiveColor : circleInactiveColor
                      }
                    />
                    <h3 className="product__order_subtitle">1 День</h3>
                  </div>
                  <h3 className="product__order_subtitle">{cheat.day1} ₽</h3>
                </div>
              ) : (
                ""
              )}
              {cheat.day7 ? (
                <div
                  className={
                    show === "week" ? plansActiveColor : plansInactiveColor
                  }
                  onClick={handleWeekClick}
                >
                  <div className="product__wrapper_order-days">
                    <div
                      className={
                        show === "week"
                          ? circleActiveColor
                          : circleInactiveColor
                      }
                    />
                    <h3 className="product__order_subtitle">7 Дней</h3>
                  </div>
                  <h3 className="product__order_subtitle">{cheat.day7} ₽</h3>
                </div>
              ) : (
                ""
              )}
              {cheat.day30 ? (
                <div
                  className={
                    show === "mouth" ? plansActiveColor : plansInactiveColor
                  }
                  onClick={handleMouthClick}
                >
                  <div className="product__wrapper_order-days">
                    <div
                      className={
                        show === "mouth"
                          ? circleActiveColor
                          : circleInactiveColor
                      }
                    />
                    <h3 className="product__order_subtitle">30 Дней</h3>
                  </div>
                  <h3 className="product__order_subtitle">{cheat.day30} ₽</h3>
                </div>
              ) : (
                ""
              )}

              {cheat.closedCheat === true ? (
                <>
                  {show === "day" && (
                    <button className="product__order_button" onClick={setPopupClosed}>
                      Оплатить
                    </button>
                  )}

                  {show === "week" && (
                    <button className="product__order_button" onClick={setPopupClosed}>
                      Оплатить
                    </button>
                  )}

                  {show === "mouth" && (
                    <button className="product__order_button" onClick={setPopupClosed}>
                      Оплатить
                    </button>
                  )}
                </>
              ) : (
                <>
                  {show === "day" && (
                    <a href={cheat.day1Link} target="_blank" rel="noreferrer">
                      <button className="product__order_button">
                        Оплатить
                      </button>
                    </a>
                  )}

                  {show === "week" && (
                    <a href={cheat.day7Link} target="_blank" rel="noreferrer">
                      <button className="product__order_button">
                        Оплатить
                      </button>
                    </a>
                  )}

                  {show === "mouth" && (
                    <a href={cheat.day30Link} target="_blank" rel="noreferrer">
                      <button className="product__order_button">
                        Оплатить
                      </button>
                    </a>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="product__container_functional"
          custom={1}
          variants={imgAnimation}
        >
          <h3 className="product__functional_title">Функционал</h3>
          <div className="product__wrap_functional">
            {cheat.aimbot ? (
              <div className="product__wrapper_functional">
                <div className="product__wrap_title">
                  <img
                    className="product__functional_image"
                    src={aimbotIcon}
                    alt="aimbot"
                  />
                  <h4 className="product__functional_subtitle">Aimbot</h4>
                </div>
                <div className="product__wrapper_buttons">
                  {cheat.aimbot.map(aimbot => (
                    <button key={aimbot} className="product__wrapper_button">
                      {aimbot}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {cheat.esp ? (
              <div className="product__wrapper_functional">
                <div className="product__wrap_title">
                  <img
                    className="product__functional_image"
                    src={espIcon}
                    alt="esp"
                  />
                  <h4 className="product__functional_subtitle">ESP</h4>
                </div>
                <div className="product__wrapper_buttons">
                  {cheat.esp.map(esp => (
                    <button key={esp} className="product__wrapper_button">
                      {esp}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {cheat.misc ? (
              <div className="product__wrapper_functional">
                <div className="product__wrap_title">
                  <img
                    className="product__functional_image"
                    src={miscIcon}
                    alt="misc"
                  />
                  <h4 className="product__functional_subtitle">MISC</h4>
                </div>
                <div className="product__wrapper_buttons">
                  {cheat.misc.map(misc => (
                    <button key={misc} className="product__wrapper_button">
                      {misc}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <h3 className="product__functional_title">Системные требования</h3>
          <div className="product__wrap_functional">
            <div className="product__wrapper_functional">
              <div className="product__wrap_title">
                <img
                  className="product__functional_image"
                  src={procIcon}
                  alt="proc"
                />
                <h4 className="product__functional_subtitle">Процессор</h4>
              </div>
              <div className="product__wrapper_buttons">
                {cheat.proc.map(proc => (
                  <button key={proc} className="product__wrapper_button">
                    {proc}
                  </button>
                ))}
              </div>
            </div>
            <div className="product__wrapper_functional">
              <div className="product__wrap_title">
                <img
                  className="product__functional_image"
                  src={osIcon}
                  alt="os"
                />
                <h4 className="product__functional_subtitle">ОС</h4>
              </div>
              <div className="product__wrapper_buttons">
                {cheat.os.map(os => (
                  <button key={os} className="product__wrapper_button">
                    {os}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <PopupClosed active={popupClosed} setActive={setPopupClosed} />
      {cheat.image1 ? (
        <PopupImage
          active={popupImageActive1}
          setActive={setPopupImageActive1}
          image={cheat.image1}
          alt={cheat.name}
        />
      ) : (
        ""
      )}
      {cheat.image2 ? (
        <PopupImage
          active={popupImageActive2}
          setActive={setPopupImageActive2}
          image={cheat.image2}
          alt={cheat.name}
        />
      ) : (
        ""
      )}
      {cheat.image3 ? (
        <PopupImage
          active={popupImageActive3}
          setActive={setPopupImageActive3}
          image={cheat.image3}
          alt={cheat.name}
        />
      ) : (
        ""
      )}
      {cheat.image4 ? (
        <PopupImage
          active={popupImageActive4}
          setActive={setPopupImageActive4}
          image={cheat.image4}
          alt={cheat.name}
        />
      ) : (
        ""
      )}
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Product;
