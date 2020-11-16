import { createStore, applyMiddleware } from "redux";
import moxios from "moxios";

import { fetchClasses } from "../__mocks__/fetchClasses";
import { middlewares as mockMiddlewares } from "../__mocks__/store";
import { classesData as mockClassesData } from "../__mocks__/classesData";
import {
  classesReducer as mockClassesReducer,
  initialState as mockInitialState,
} from "../reducers/classesReducer";

// const testStore = (initialState) => {
//   const mockCreateStoreWithMiddlewares = applyMiddleware(...mockMiddlewares)(
//     createStore
//   );
//   return mockCreateStoreWithMiddlewares(mockClassesReducer, mockInitialState);
// };

describe("Integration Testing for Action Creators", () => {
  describe("IT for fetchClasses", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });
    it("should return all classes", () => {
      const mockStore = createStore(
        mockClassesReducer,
        applyMiddleware(...mockMiddlewares)
      );

      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        req.respondWith({
          status: 200,
          response: mockClassesData,
        });

        return mockStore.dispatch(mockFetchClasses()).then(() => {
          const newMockStore = mockStore.getState();
          expect(newMockStore.classes).toHaveValue(mockClassesData);
        });
      });
    });
  });
});
