import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface User {
  login: string;
  password: string;
  isAuth: boolean;
  favourites: number[];
  history: string[];
}

interface Users {
  users: User[];
}

interface SignInData {
  login: string;
  password: string;
}

interface SignOutData {
  login: string;
}

const initialState: Users = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<SignInData>) => {
      const newUser = {
        login: action.payload.login,
        password: action.payload.password,
        isAuth: true,
        favourites: [],
        history: [],
      };

      state.users.push(newUser);
    },

    loadUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    signIn: (state, action: PayloadAction<SignInData>) => {
      const user = state.users.find(
        (user) => user.login === action.payload.login
      );

      if (user) {
        user.isAuth = true;
      }
    },

    logOut: (state, action: PayloadAction<SignOutData>) => {
      const user = state.users.find(
        (user) => user.login === action.payload.login
      );

      if (user) {
        user.isAuth = false;
      }
    },
  },
});

export const { addUser, loadUsers, signIn, logOut } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;
export const selectAuthUser = (state: RootState) =>
  state.users.users.find((user) => user.isAuth === true);

export default usersSlice.reducer;
