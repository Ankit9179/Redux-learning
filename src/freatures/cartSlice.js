import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
  cart: [],
  items: ProductData, //here is all phones
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    deletecart: (state, action) => {
      state.cart.slice(action.payload);
    },
  },
});

export const { addToCart, deletecart } = cartSlice.actions;
export default cartSlice.reducer;
