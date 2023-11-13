import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types/product";

export interface ICart {
  product: IProduct,
  count: number
}

type CartState = {
  cart: ICart[];
};

const initialState: CartState = {
  cart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        cart: state.cart.filter((x) => x.product.id !== action.payload),
      };
    },
    changeCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.product.id === action.payload.id ? { ...x, count: action.payload.count } : x
        ),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cart: []
      }
    }
  },
});

export const { addToCart, removeFromCart, changeCount } = cart.actions;
export default cart.reducer;
