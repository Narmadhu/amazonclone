import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BasketItem {
  id: string;
  title: string;
  rate: string;
  price: number;
  img: string;
  noOfProducts?: number;
}

export interface InitialState {
  basket: BasketItem[];
  noOfItemsInCart: number;
  // user: null,
}

export const initialState: InitialState = {
  basket: [],
  noOfItemsInCart: 0,
};

export const appSlice = createSlice({
  name: "itemInCart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<BasketItem>) => {
      const existingProduct = state.basket.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct !== undefined) {
        const updatedBasket = state.basket.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              noOfProducts: existingProduct?.noOfProducts! + 1,
            };
          }
          return product;
        });
        return { ...state, basket: updatedBasket };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, noOfProducts: 1 }],
        };
      }
    },
    removeItemToCart: (state, action: PayloadAction<string>) => {
      let newBasket = [...state.basket];
      const removeItem = state.basket.find(
        (basketItem) => basketItem.id === action.payload
      );
      if (removeItem !== undefined) {
        if (removeItem?.noOfProducts! > 1) {
          newBasket = newBasket.map((product) => {
            if (product.id === action.payload) {
              return {
                ...product,
                noOfProducts: removeItem?.noOfProducts! - 1,
              };
            } else {
              return product;
            }
          });
        } else {
          newBasket = newBasket.filter(
            (basket) => basket.id !== action.payload
          );
        }
      }

      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn("cant remove the property ");
      // }
      return {
        ...state,
        basket: newBasket,
      };
    },
    updateItemsInCart: (state, action: PayloadAction<string>) => {
      if (action.payload.toLowerCase() === "add") {
        return {
          ...state,
          noOfItemsInCart: state.noOfItemsInCart + 1,
        };
      } else {
        return {
          ...state,
          noOfItemsInCart: state.noOfItemsInCart - 1,
        };
      }
    },
  },
});

export const { addItemToCart, removeItemToCart, updateItemsInCart } =
  appSlice.actions;

export default appSlice.reducer;
