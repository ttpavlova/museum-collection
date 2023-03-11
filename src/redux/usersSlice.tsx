import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface User {
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

const reHydrateStore = () => {
  const usersData = localStorage.getItem("users") || "[]";
  const users = JSON.parse(usersData);

  return users;
};

const initialState: Users = {
  users: reHydrateStore(),
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

    signIn: (state, action: PayloadAction<SignInData>) => {
      const user = state.users.find(
        (user) => user.login === action.payload.login
      );

      if (user) {
        user.isAuth = true;
      }
    },

    logOut: (state, action: PayloadAction<string>) => {
      const user = state.users.find((user) => user.login === action.payload);

      if (user) {
        user.isAuth = false;
      }
    },
  },
});

export const { addUser, signIn, logOut } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
