import { searchReducer } from "../searchReducer";
import { changeSearchParams } from "../actions";

describe("testing search reducer", () => {
  it("shoud change search params", () => {
    const newSearchParams = {
      inputValue: "testValue",
      categoriesValue: "testCategories",
      sortingValue: "testSorting",
    };
    const changeSearchParamsAction = changeSearchParams(newSearchParams);

    const state = {};

    const newState = searchReducer(state, changeSearchParamsAction);

    expect(newState).toEqual(newSearchParams);
  });

  it("shoud return state with wrong action", () => {
    const wrongAction = { type: "WRONG_TEST_ACTION" };
    const state = {
      inputValue: "testValue",
      categoriesValue: "testCategories",
      sortingValue: "testSorting",
    };

    const newState = searchReducer(state, wrongAction);

    expect(newState).toEqual(state);
  });
});
