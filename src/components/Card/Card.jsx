// import cardImage from "../../images/card__image.svg";
import Price from "../Card/Price";
import OnUpdateMini from "../Status/OnUpdateMini";
import UndetectedMini from "../Status/UndetectedMini";
import "./Card.css";

function Card({ title, day1, day7, day30, status, logoGame, image1 }) {
  return (
    <div className="card">
      {status === "Undetected" ? <UndetectedMini /> : <OnUpdateMini />}
      {/* <UndetectedMini /> */}
      <Price day1={day1} day7={day7} day30={day30} />
      <div className="card__container">
        <img className="card__img" src={image1} alt="cardImage" />
        <div className="card__wrap">
          <div className="card__wrapper">
            <img className="card__logo" src={logoGame} alt="cardLogo" />
            <p className="card__title">{title}</p>
          </div>
          <button className="card__button">Перейти</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
