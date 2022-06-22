import React, { useState } from "react";
import "./AppHeader.css";
import { fetchBooks } from "../../store/actions";
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';

export default function AppHeader() {
  const [inputValue, setInputValue] = useState("");
  const [categoriesValue, setCategoriesValue] = useState("all");
  const [sortingValue, setSortingValue] = useState("relevance");
  const dispatch = useDispatch();

  function onClickHandler() {
    if (inputValue.trim()) {
      dispatch(fetchBooks({ inputValue, categoriesValue, sortingValue }));
    }
  }

  function changeSelectCategories(e) {
    setCategoriesValue(e.target.value);
  }

  function changeSelectSorting(e) {
    setSortingValue(e.target.value);
  }

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      onClickHandler()
    }
  }

  return (
    <header className="header" onKeyPress={handleKeyPress}>
      <div className="header-title">
        <h1 className="header-title__text">Search for books</h1>
      </div>
      <div className="header-search-bar">
        <form onSubmit={e => e.preventDefault()}>
          <input
            className="header-search-bar__input"
            value={inputValue}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
            type="text"
            placeholder="Name of Book"
            required
          />
          <button className="header-search-bar__btn" onClick={onClickHandler}>
            <SearchIcon className='header-search-bar__btn-icon' />
          </button>
        </form>
      </div>
      <div className="header-sort-bar">
        <div className="header-sort-bar__select-group">
          <label htmlFor="categories" className="select-group-label"> Categories </label>
          <select
            className="select-group-select"
            size="1"
            id="categories"
            value={categoriesValue}
            onChange={changeSelectCategories}
          >
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>
        <div className="header-sort-bar__select-group">
          <label htmlFor="sorting" className="select-group-label"> Sorting by </label>
          <select
            className="select-group-select"
            size="1"
            name=""
            id="sorting"
            value={sortingValue}
            onChange={changeSelectSorting}
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </header>
  );
}
