import {configureStore} from "@reduxjs/toolkit"
import auth from "@/redux/slices/authSlice";
import cart from "@/redux/slices/cartSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    auth,
    cart
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;