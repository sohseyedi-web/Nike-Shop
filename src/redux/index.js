import { configureStore } from "@reduxjs/toolkit";
import nikeSlice from "./reducers/index";
const Store = configureStore({
  reducer: {
    nike: nikeSlice,
  },
});

export default Store;
