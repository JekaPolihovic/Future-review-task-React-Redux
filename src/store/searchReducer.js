import { CHANGE_SEARCH_PARAMS } from "./types";

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_PARAMS:
      const { inputValue, categoriesValue, sortingValue } =
        action.payload.searchParams;
      return { ...state, inputValue, categoriesValue, sortingValue };
    default:
      return state;
  }
};
