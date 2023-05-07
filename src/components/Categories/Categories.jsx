import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
import Search from "../Search/Search";
import "./Categories.css";

function Categories() {
  const textAnimation = {
    hidden: {
      x: 80,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const buttonAnimation = {
    hidden: {
      x: -80,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const dispatch = useDispatch();

  const categoryId = useSelector(state => state.filter.categoryId);

  const [categoriesData, setCategoriesData] = useState({ buttons: [] });

  const onClickCategory = id => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const fetchButton = async () => {
      const result = await axios.get(
        "https://644ea5454e86e9a4d8fe278b.mockapi.io/buttons"
      );
      setCategoriesData(result.data[0]);
    };
    fetchButton();
  }, []);

  return (
    <motion.section
      className="categories"
      initial="hidden"
      whileInView="visible"
    >
      <div className="categories__container">
        <motion.div
          className="categories__buttons"
          custom={1}
          variants={buttonAnimation}
        >
          <div className="categories__type">
            {categoriesData.buttons.map((value, index) => (
              <button
                className={
                  categoryId === index
                    ? "categories__button_active"
                    : "categories__button"
                }
                key={index}
                onClick={() => onClickCategory(index)}
              >
                {value}
              </button>
            ))}
          </div>
        </motion.div>
        <motion.div custom={1} variants={textAnimation}>
          <Search />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Categories;
