import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/types/user";

type AuthState = {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
};

const initialState: AuthState = {
  isAuth: false,
  user: { id: -1, email: "" },
  isLoading: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
});

export const { logIn, logOut, setIsLoading } = auth.actions;
export default auth.reducer;
