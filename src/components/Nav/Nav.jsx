import { NavLink } from "react-router-dom";
import arrow from "../../images/nav__arrow.svg";
import home from "../../images/nav__home.svg";
import "./Nav.css";

function Nav({ title, link }) {
  return (
    <section className="nav">
      <div className="nav__container">
        <NavLink className="nav__link" to="/">
          <img className="nav__image_home" src={home} alt="home" />
        </NavLink>
        <img className="nav__image_arrow" src={arrow} alt="arrow" />
        <NavLink className="nav__link" to={link}>
          <p className="nav__text_inactive">{title}</p>
        </NavLink>
      </div>
    </section>
  );
}

export default Nav;
