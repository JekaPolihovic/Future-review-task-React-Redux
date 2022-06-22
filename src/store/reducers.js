import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { searchReducer } from "./searchReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  searchParams: searchReducer,
  loading: loaderReducer,
});
