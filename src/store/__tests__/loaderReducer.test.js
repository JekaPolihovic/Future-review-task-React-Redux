import { loaderReducer } from "../loaderReducer";
import { toggleSearchLoader, togglePaginationLoader } from "../actions";

describe("testing loader reducer", () => {
  it("search loader shoud enable", () => {
    const toggleSearchLoaderAction = toggleSearchLoader();
    const state = { searchLoader: false, paginationLoader: false };

    const newState = loaderReducer(state, toggleSearchLoaderAction);

    expect(newState.searchLoader).toBe(true);
  });

  it("search loader shoud disable", () => {
    const toggleSearchLoaderAction = toggleSearchLoader();
    const state = { searchLoader: true, paginationLoader: false };

    const newState = loaderReducer(state, toggleSearchLoaderAction);

    expect(newState.searchLoader).toBe(false);
  });

  it("pagination loader shoud enable", () => {
    const togglePaginationLoaderAction = togglePaginationLoader();
    const state = { searchLoader: false, paginationLoader: false };

    const newState = loaderReducer(state, togglePaginationLoaderAction);

    expect(newState.paginationLoader).toBe(true);
  });

  it("pagination loader shoud disable", () => {
    const togglePaginationLoaderAction = togglePaginationLoader();
    const state = { searchLoader: false, paginationLoader: true };

    const newState = loaderReducer(state, togglePaginationLoaderAction);

    expect(newState.paginationLoader).toBe(false);
  });

  it("shoud return state with wrong action", () => {
    const wrongAction = { type: "WRONG_TEST_ACTION" };
    const state = { searchLoader: false, paginationLoader: true };

    const newState = loaderReducer(state, wrongAction);

    expect(newState).toEqual(state);
  });
});
