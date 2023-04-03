import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginStates {
  _id: number;
  fullName: string;
  username: string;
  birthDate: string;
  sex: string;
  accountType: string;
  terms: Boolean;
  email: string;
}

export type AppState = {
  login: LoginStates;
};

export const initialState: LoginStates = {
  _id: 0,
  fullName: "",
  username: "",
  birthDate: "",
  sex: "",
  accountType: "",
  terms: false,
  email: "",
};

export const LoginUser = createSlice({
  name: "loginUser",
  initialState: initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<LoginStates>) => {
      return action.payload;
    },
  },
});

export const { loggedIn } = LoginUser.actions;

export default LoginUser.reducer;
