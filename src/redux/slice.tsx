import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BasketItem {
  id: string;
  title: string;
  rate: string;
  price: number;
  img: string;
}

export interface InitialState {
  basket: BasketItem[];
  // user: null,
}

export const initialState: InitialState = {
  basket: [],
};

export const appSlice = createSlice({
  name: "itemInCart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<BasketItem>) => {
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    },
    removeItemToCart: (state, action: PayloadAction<string>) => {
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove the property ");
      }

      return {
        ...state,
        basket: newBasket,
      };
    },
  },
});

export const { addItemToCart, removeItemToCart } = appSlice.actions;

export default appSlice.reducer;
