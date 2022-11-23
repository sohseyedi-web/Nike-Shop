import { createSlice } from "@reduxjs/toolkit";

const nikeSlice = createSlice({
  name: "nike",
  initialState: {
    productItem: [],
  },
  reducers: {
    addItemtoCart(state, action) {
      return state;
    },
    removeItemCart(state, action) {
      return state;
    },
  },
});

export const { addItemtoCart, removeItemCart } = nikeSlice.actions;

export default nikeSlice.reducer;
