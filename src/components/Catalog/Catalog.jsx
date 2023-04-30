import Card from "../Card/Card";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import FooterAuthor from "../Footer/FooterAuthor";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./Catalog.css";

function Catalog() {
  return (
    <>
      <Header />
      <Nav title="Каталог" link="/catalog" />
      <Categories />
      <section className="catalog">
        <div className="catalog__container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Footer />
      <FooterAuthor />
    </>
  );
}

export default Catalog;
