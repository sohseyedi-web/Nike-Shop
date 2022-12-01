import { createSlice } from "@reduxjs/toolkit";

const nikeSlice = createSlice({
  name: "nike",
  initialState: {
    productItem: [],
  },
  reducers: {
    addItemtoCart(state, action) {
      const updateItem = [...state.productItem];
      const itemIndex = updateItem.findIndex((i) => i.id === action.payload.id);

      if (itemIndex < 0) {
        let tempProduct = { ...action.payload, quantity: 1 };
        updateItem.push(tempProduct);
      } else {
        const updatedCart = { ...updateItem[itemIndex] };
        updatedCart.quantity++;
        updateItem[itemIndex] = updatedCart;
      }
      return {
        ...state,
        productItem: updateItem,
      };
    },
    removeItemCart(state, action) {
      const updateItem = [...state.productItem];
      const itemIndex = updateItem.findIndex((i) => i.id === action.payload.id);
      const updateCart = { ...updateItem[itemIndex] };

      if (updateCart.quantity === 1) {
        const filterItem = updateItem.filter((i) => i.id !== action.payload.id);
        return {
          ...state,
          productItem: filterItem,
        };
      } else {
        updateCart.quantity--;
        updateItem[itemIndex] = updateCart;
        return {
          ...state,
          productItem: updateItem,
        };
      }
    },
  },
});

export const { addItemtoCart, removeItemCart } = nikeSlice.actions;

export default nikeSlice.reducer;
