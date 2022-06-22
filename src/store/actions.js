import {
  ADD_MORE_BOOKS,
  SET_BOOKS,
  CHANGE_SEARCH_PARAMS,
  TOGGLE_SEARCH_LOADER,
  TOGGLE_PAGINATION_LOADER,
  SET_BOOKS_COUNT,
} from "./types";

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: {
    books,
  },
});

export const setFoundBooks = (booksCount) => ({
  type: SET_BOOKS_COUNT,
  payload: {
    booksCount,
  },
});

export const fetchBooks = (searchParams) => {
  return function (dispatch) {
    dispatch(toggleSearchLoader());
    dispatch(changeSearchParams(searchParams));
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:"${
        searchParams.inputValue
      }"${
        searchParams.categoriesValue !== "all"
          ? "+subject:" + searchParams.categoriesValue
          : ""
      }&maxResults=30&orderBy=${
        searchParams.sortingValue
      }&printType=books&projection=full&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        if (r.items) {
          r.items = r.items.filter((el) => el.volumeInfo);
          dispatch(setFoundBooks(r.totalItems));
          r.items = r.items.filter((el) => el.volumeInfo);
          dispatch(setBooks(r.items));
          dispatch(toggleSearchLoader());
        } else {
          dispatch(setFoundBooks(null));
          dispatch(toggleSearchLoader());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addMoreBooks = (books) => ({
  type: ADD_MORE_BOOKS,
  payload: {
    books,
  },
});

export const fetchMoreBooks = (length, searchParams, maxRes = 30) => {
  return function (dispatch) {
    dispatch(togglePaginationLoader());
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:"${
        searchParams.inputValue
      }"${
        searchParams.categoriesValue !== "all"
          ? "+subject:" + searchParams.categoriesValue
          : ""
      }&startIndex=${length}&maxResults=${maxRes}&orderBy=${
        searchParams.sortingValue
      }&projection=full&printType=books&projection=full&key=AIzaSyDqSD1ikizFCnZNTB4eEtf_udpdHc_ZpDs`
    )
      .then((r) => r.json())
      .then((r) => {
        if (r.items) {
          r.items = r.items.filter((el) => el.volumeInfo);
          dispatch(addMoreBooks(r.items));
          dispatch(togglePaginationLoader());
        } else {
          console.log("Nothing found");
          dispatch(togglePaginationLoader());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const changeSearchParams = (searchParams) => ({
  type: CHANGE_SEARCH_PARAMS,
  payload: {
    searchParams,
  },
});

export const toggleSearchLoader = () => ({
  type: TOGGLE_SEARCH_LOADER,
});

export const togglePaginationLoader = () => ({
  type: TOGGLE_PAGINATION_LOADER,
});
