import Card from "../Card/Card";
import "./Popular.css";

function Popular() {
  return (
    <section className="popular">
      <div className="popular__container">
        <h1 className="popular__title">
          <span className="popular__span">Популярные</span> читы
        </h1>
        <div className="popular__cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Popular;
