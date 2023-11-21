import { createSlice } from "@reduxjs/toolkit";
import { IDetailAPI } from "src/pages/detail/type";

type State = {
  cart: IDetailAPI[];
};

const initialState: State = {
  cart: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);

      // Immer:
      // return [...state];

      // Không dùng return;
      // Nếu dùng: phải tự clone
    },
    removeItem: (state, action) => {
      return state;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
