import loaderImage from "../../images/loader.svg";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import "./Loader.css";

function Loader() {
  return (
    <>
      <Header />
      <div className="loader__container">
        <div className="loader">
          <img
            className="loader__image rotation"
            src={loaderImage}
            alt="loader"
          />
        </div>
      </div>
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Loader;
