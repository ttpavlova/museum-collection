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

const getDataFromLocalStorage = () => {
  const usersData = localStorage.getItem("users");

  if (usersData === null || usersData === "undefined") {
    return [];
  }

  return JSON.parse(usersData);
};

const initialState: Users = {
  users: getDataFromLocalStorage(),
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

    logOut: (state, action: PayloadAction<SignOutData>) => {
      const user = state.users.find(
        (user) => user.login === action.payload.login
      );

      if (user) {
        user.isAuth = false;
      }
    },

    toggleFavourite: (state, action: PayloadAction<number>) => {
      const user = state.users.find((user) => user.isAuth);

      if (user) {
        if (user.favourites.includes(action.payload)) {
          const updatedFavourites = user.favourites.filter(
            (id) => id !== action.payload
          );

          user.favourites = updatedFavourites;
        } else {
          user.favourites.push(action.payload);
        }
      }
    },

    addHistory: (state, action: PayloadAction<string>) => {
      const user = state.users.find((user) => user.isAuth);

      if (user) {
        const updatedHistory = user.history.filter(
          (url) => url !== action.payload
        );

        updatedHistory.push(action.payload);

        user.history = updatedHistory;
      }
    },

    removeHistory: (state, action: PayloadAction<string>) => {
      const user = state.users.find((user) => user.isAuth);

      if (user) {
        const updatedHistory = user.history.filter(
          (url) => url !== action.payload
        );

        user.history = updatedHistory;
      }
    },

    clearHistory: (state) => {
      const user = state.users.find((user) => user.isAuth);

      if (user) {
        user.history = [];
      }
    },
  },
});

export const {
  addUser,
  signIn,
  logOut,
  toggleFavourite,
  addHistory,
  removeHistory,
  clearHistory,
} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;
export const selectAuthUser = (state: RootState) =>
  state.users.users.find((user) => user.isAuth);

export default usersSlice.reducer;
