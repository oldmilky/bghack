import search from "../../images/categories__search.svg";
import "./Categories.css";

function Categories() {
  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__buttons">
          <div className="categories__type">
            <button className="categories__button">ALL</button>
            <button className="categories__button_active">Escape From Tarkov</button>
            <button className="categories__button">War Thunder</button>
            <button className="categories__button">DayZ</button>
            <button className="categories__button">Lost Light</button>
            <button className="categories__button">Modern Warfare 2 || Warzone 2</button>
            <button className="categories__button">Rust</button>
            <button className="categories__button">Valorant</button>
            <button className="categories__button">Squad</button>
            <button className="categories__button">Apex Legends</button>
            <button className="categories__button">SCUM</button>
            <button className="categories__button">Arma 3</button>
            <button className="categories__button">Dead Side</button>
          </div>
        </div>
        <div className="categories__wrap">
          <img className="categories__search_image" src={search} alt="search" />
          <input
            className="categories__search"
            type="text"
            placeholder="Поиск чита"
          />
        </div>
      </div>
    </section>
  );
}

export default Categories;
