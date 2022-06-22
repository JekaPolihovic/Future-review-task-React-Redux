import { SET_BOOKS, ADD_MORE_BOOKS, SET_BOOKS_COUNT } from "./types";

export const booksReducer = (
  state = { booksItems: [], booksCount: 0 },
  action
) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, booksItems: action.payload.books };

    case ADD_MORE_BOOKS:
      const concatBooks = state.booksItems.concat(action.payload.books);
      return { ...state, booksItems: concatBooks };

    case SET_BOOKS_COUNT:
      return { ...state, booksCount: action.payload.booksCount };

    default:
      return state;
  }
};
