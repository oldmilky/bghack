import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO.svg";
import "./Footer.css";

function FooterAuthor() {
  return (
    <div className="footer__author">
      <div className="footer__container_author">
        <div className="footer__author_wrap-bg">
          <p className="footer__author_text">
            Copyright © 2023 <span className="footer__author_span">BGHack</span>{" "}
            Shop All Rights Reserved.
          </p>
        </div>
        <NavLink className="footer__Link" to="/">
          <img className="footer__logo" src={logo} alt="footerLogo" />
        </NavLink>
        <div className="footer__author_wrap">
          <p className="footer__author_text-dev">
            Develop and design:{" "}
            <a
              className="footer__link"
              href="https://t.me/rodion914"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer__author_span">oldmilky</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterAuthor;
