import debounce from "lodash.debounce";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import search from "../../images/categories__search.svg";
import { setSearchValue } from "../../redux/slices/filterSlice";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce(str => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = event => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="search__wrap">
      <img className="search_image" src={search} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="search__input"
        type="text"
        placeholder="Поиск чита"
      />
    </div>
  );
}

export default Search;
