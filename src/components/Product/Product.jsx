import logoTarkov from "../../images/logo__tarkov.svg";
import aimbotIcon from "../../images/product__aimbot.svg";
import espIcon from "../../images/product__esp.svg";
import mainImage from "../../images/product__image.svg";
import secondImage from "../../images/product__image_mini.svg";
import miscIcon from "../../images/product__misc.svg";
import osIcon from "../../images/product__os.svg";
import procIcon from "../../images/product__proc.svg";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import NavProduct from "../Nav/NavProduct";
import Undetected from "../Status/Undetected";
import "./Product.css";

function Product() {
  return (
    <>
      <Header />
      <NavProduct />
      <section className="product">
        <div className="product__container">
          <div className="product__wrap_images">
            <div className="product__wrapper_image-first">
              <img className="product__image" src={mainImage} alt="MainPage" />
            </div>
            <div className="product__wrapper_images">
              <div className="product__wrapper_image-second">
                <img
                  className="product__image_mini"
                  src={secondImage}
                  alt="Second"
                />
              </div>
              <div className="product__wrapper_image-second">
                <img
                  className="product__image_mini"
                  src={secondImage}
                  alt="Second"
                />
              </div>
              <div className="product__wrapper_image-second">
                <img
                  className="product__image_mini"
                  src={secondImage}
                  alt="Second"
                />
              </div>
            </div>
          </div>
          
          <div className="product__wrap">
            <div className="product__wrapper">
              <img className="product__logo" src={logoTarkov} alt="logo" />
              <h1 className="product__title">EFT Chams</h1>
            </div>
            <Undetected />
            <p className="product__text">
              Представляю вашему вниманию лучший софт для Escape From Tarkov от
              компании LabsKing. В чите есть готовые пресеты настроек, поэтому
              данный чит отлично подойдётдля РМТ и для легит игроков.
            </p>
          </div>

          <div className="product__wrap_order">
            <h2 className="product__order_title">
              <span className="product__order_span">Оформление</span> заказа
            </h2>
            <div className="product__container_order">
              <div className="product__wrapper_order">
                <div className="product__wrapper_order-days">
                  <div className="product__order_point" />
                  <h3 className="product__order_subtitle">1 День</h3>
                </div>
                <h3 className="product__order_subtitle">290 ₽</h3>
              </div>
              <div className="product__wrapper_order">
                <div className="product__wrapper_order-days">
                  <div className="product__order_point" />
                  <h3 className="product__order_subtitle">7 Дней</h3>
                </div>
                <h3 className="product__order_subtitle">790 ₽</h3>
              </div>
              <div className="product__wrapper_order">
                <div className="product__wrapper_order-days">
                  <div className="product__order_point" />
                  <h3 className="product__order_subtitle">30 Дней</h3>
                </div>
                <h3 className="product__order_subtitle">1990 ₽</h3>
              </div>
              <button className="product__order_button">Оплатить</button>
            </div>
          </div>
        </div>

        <div className="product__container_functional">
          <h3 className="product__functional_title">Функционал</h3>
          <div className="product__wrap_functional">
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
                <button className="product__wrapper_button">FOV</button>
                <button className="product__wrapper_button">Smooth</button>
                <button className="product__wrapper_button">Aimbone</button>
                <button className="product__wrapper_button">Nearest</button>
                <button className="product__wrapper_button">Sensiivity</button>
                <button className="product__wrapper_button">Sensiivity</button>
                <button className="product__wrapper_button">Sensiivity</button>
              </div>
            </div>
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
                <button className="product__wrapper_button">FOV</button>
                <button className="product__wrapper_button">Smooth</button>
                <button className="product__wrapper_button">Aimbone</button>
                <button className="product__wrapper_button">Nearest</button>
              </div>
            </div>
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
                <button className="product__wrapper_button">FOV</button>
                <button className="product__wrapper_button">Smooth</button>
                <button className="product__wrapper_button">Aimbone</button>
                <button className="product__wrapper_button">Nearest</button>
              </div>
            </div>
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
                <button className="product__wrapper_button">Intel</button>
                <button className="product__wrapper_button">AMD</button>
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
                <button className="product__wrapper_button">Windows 10</button>
                <button className="product__wrapper_button">Windows 11</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Product;
