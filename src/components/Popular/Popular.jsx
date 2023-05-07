import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCheat } from "../../redux/slices/cheatSlice";
import Card from "../Card/Card";
import CatalogEmpty from "../Catalog/CatalogEmpty";
import Skeletons from "../Catalog/Skeletons";
import "./Popular.css";

function Popular() {
  const textAnimation = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const categoryId = useSelector(state => state.filter.categoryId);
  const searchValue = useSelector(state => state.filter.searchValue);
  const currentPage = useSelector(state => state.filter.currentPage);
  const items = useSelector(state => state.cheat.items);
  const status = useSelector(state => state.cheat.status);

  const dispatch = useDispatch();

  const sortType = useSelector(state => state.filter.sort.sortProperty);

  const getCheat = async () => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchCheat({ currentPage, category, sortBy, order, search }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getCheat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, currentPage, dispatch, searchValue, sortType]);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeletons key={index} />
  ));

  const cheats = items
    .filter(obj => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map(obj =>
      obj.popularGames === true ? (
        <Link
          className="catalog__link"
          to={`/${obj.gameTypeLink}/${obj.id}`}
          key={obj.id}
        >
          <Card
            title={obj.name}
            day1={obj.day1}
            day7={obj.day7}
            day30={obj.day30}
            status={obj.status}
            logoGame={obj.logoGame}
            image1={obj.image1}
          />
        </Link>
      ) : (
        ""
      )
    );

  return (
    <motion.section className="popular" initial="hidden" whileInView="visible">
      <div className="popular__container">
        <motion.h1
          className="popular__title"
          custom={1}
          variants={textAnimation}
        >
          <span className="popular__span">Популярные</span> читы
        </motion.h1>
        {status === "error" ? (
          <CatalogEmpty />
        ) : (
          <div className="popular__cards">
            {status === "loading" ? skeletons : cheats}
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default Popular;
