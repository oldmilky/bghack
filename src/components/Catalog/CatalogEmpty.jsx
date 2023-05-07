import "./Catalog.css";

function CatalogEmpty() {
  return (
    <div className="catalog_empty">
      <h1 className="catalog_empty__title">Произошла ошибка :c</h1>
      <p className="catalog_empty__text">
        К сожалению, не удалось получить софты.
      </p>
      <p className="catalog_empty__text">Попробуйте попытку позднее</p>
    </div>
  );
}

export default CatalogEmpty;
