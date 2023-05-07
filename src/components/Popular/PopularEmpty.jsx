import "./Popular.css";

function PopularEmpty() {
  return (
    <div className="popular_empty">
      <h1 className="popular_empty__title">Произошла ошибка :c</h1>
      <p className="popular_empty__text">
        К сожалению, не удалось получить софты.
      </p>
      <p className="popular_empty__text">Попробуйте попытку позднее</p>
    </div>
  );
}

export default PopularEmpty;
