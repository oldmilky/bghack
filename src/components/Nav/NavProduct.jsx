import { NavLink } from "react-router-dom";
import arrow from "../../images/nav__arrow.svg";
import home from "../../images/nav__home.svg";
import "./Nav.css";

function NavProduct() {
  return (
    <section className="nav">
      <div className="nav__container">
        <NavLink className="nav__link" to="/">
          <img className="nav__image_home" src={home} alt="home" />
        </NavLink>
        <img className="nav__image_arrow" src={arrow} alt="arrow" />
        <NavLink className="nav__link" to="/catalog">
          <p className="nav__text">Каталог</p>
        </NavLink>
        <img className="nav__image_arrow" src={arrow} alt="arrow" />
        <NavLink className="nav__link" to="/product">
          <p className="nav__text_inactive">EFT Chams</p>
        </NavLink>
      </div>
    </section>
  );
}

export default NavProduct;
