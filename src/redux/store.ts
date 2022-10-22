import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import videoSlice from "./videoSlice";
import searchSlicer from "./userSlice";

export const store = configureStore({
  reducer: {
    video: videoSlice,
    search: searchSlicer
  },
  middleware: [
    createLogger({
      colors: {
        title: () => "#0f1842",
        prevState: () => "#de6f0d",
        action: () => "#6e13ab",
        nextState: () => "#1a9134"
      },
      diff: true,
      collapsed: () => true,
      predicate: (getState, action) => !action.type?.includes("pending") // it hides pending actions
    }),
    thunkMiddleware
  ]
});

export type RootState = ReturnType<typeof store.getState>;
