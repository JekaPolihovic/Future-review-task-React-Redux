import { TOGGLE_SEARCH_LOADER, TOGGLE_PAGINATION_LOADER } from "./types";

export const loaderReducer = (
  state = { searchLoader: false, paginationLoader: false },
  action
) => {
  switch (action.type) {
    case TOGGLE_SEARCH_LOADER:
      return { ...state, searchLoader: !state.searchLoader };

    case TOGGLE_PAGINATION_LOADER:
      return { ...state, paginationLoader: !state.paginationLoader };

    default:
      return state;
  }
};
