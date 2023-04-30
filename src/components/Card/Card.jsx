import { NavLink } from "react-router-dom";
import cardImage from "../../images/card__image.svg";
import cardLogo from "../../images/card__logo.svg";
import Price from "../Card/Price";
import UndetectedMini from "../Status/UndetectedMini";
import "./Card.css";

function Card() {
  return (
    <NavLink className="card__link" to="/product">
      <div className="card">
        <UndetectedMini />
        <Price />
        <div className="card__container">
          <img className="card__img" src={cardImage} alt="cardImage" />
          <div className="card__wrap">
            <div className="card__wrapper">
              <img className="card__logo" src={cardLogo} alt="cardLogo" />
              <p className="card__title">EFT Chams</p>
            </div>
            <button className="card__button">Перейти</button>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
