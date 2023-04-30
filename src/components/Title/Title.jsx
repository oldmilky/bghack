import { NavLink } from "react-router-dom";
import "./Title.css";

function Title() {
  return (
    <section className="title">
      <div className="title__container">
        <h2 className="title__subtitle">
          Испытай банановое{" "}
          <span className="title__subtitle_span">счастье</span>
        </h2>
        <h1 className="title__title_span">BGHack</h1>
        <h1 className="title__title">ПРИВАТНЫЕ ЧИТЫ</h1>
        <p className="title__text">
          Зайдите в каталог, и выберите для себя уникальный софт!
        </p>
        <NavLink className="title__link" to="/catalog">
          <button className="title__button">Каталог</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Title;
