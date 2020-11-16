import classesReducer, { initialState } from "../reducers/classesReducer";
import * as constants from "../constants";
import { mockClassesData } from "../__mocks__/classesData";

describe("Unit Testing for Classes Reducer", () => {
  describe("Fetching tests", () => {
    it("should return the default state", () => {
      expect(classesReducer(initialState, {})).toEqual({
        isFetching: false,
        classes: [],
        error: "",
      });
    });

    it("should return the updated state for fetching start action type", () => {
      expect(
        classesReducer(initialState, { type: constants.FETCH_CLASSES_START })
      ).toEqual({
        isFetching: true,
        classes: [],
        error: "",
      });
    });

    it("should return the updated state for fetching success", () => {
      expect(
        classesReducer(initialState, {
          type: constants.FETCH_CLASSES_SUCCESS,
          payload: mockClassesData,
        })
      ).toEqual({
        classes: mockClassesData,
        isFetching: false,
        error: "",
      });
    });

    it("should return the updated state for fetching failure", () => {
      expect(
        classesReducer(initialState, {
          type: constants.FETCH_CLASSES_FAILURE,
          payload: "failed to fetch data",
        })
      ).toEqual({
        classes: [],
        isFetching: false,
        error: "failed to fetch data",
      });
    });
  });

  describe("posting tests", () => {
    it("should return default state", () => {
      expect(classesReducer(initialState, {})).toEqual({
        classes: [],
        isFetching: false,
        error: "",
      });
    });

    it("should return updated state form posting start", () => {
      expect(
        classesReducer(initialState, { type: constants.POST_CLASSES_START })
      ).toEqual({
        classes: [],
        isFetching: true,
        error: "",
      });
    });

    it("should return updated state from posting success", () => {
      expect(
        classesReducer(initialState, {
          type: constants.OST_CLASSES_SUCCESS,
          payload: mockClassesData[0],
        })
      ).toEqual({
        classes: [...mockClassesData[0]],
        isFetching: false,
        error: "",
      });
    });

    it("should return updated state from posting failure", () => {
      expect(
        classesReducer(initialState, {
          type: constants.OST_CLASSES_SUCCESS,
          payload: "error posting data",
        })
      ).toEqual({
        classes: [],
        isFetching: false,
        error: "error posting data",
      });
    });
  });
});
