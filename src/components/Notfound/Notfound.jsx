import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import "./Notfound.css";

function Notfound() {
  return (
    <>
      <Header />
      <div className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Похоже страница не найдена, попробуйте попытку позднее или вернитесь на главную страницу.</p>
        <Link className="notfound__link" to="/">
          <button className="notfound__button">Главная</button>
        </Link>
      </div>
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Notfound;
