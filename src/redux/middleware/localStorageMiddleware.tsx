import { Middleware } from "redux";
import { RootState } from "../store";
import { User } from "../usersSlice";

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const users = store.getState().users.users;
    const user = users.find((user) => user.isAuth === true);
    const favourites = user?.favourites;
    const history = user?.history;

    if (action.type === "users/addUser") {
      const newUser = {
        login: action.payload.login,
        password: action.payload.password,
        isAuth: true,
        favourites: [],
        history: [],
      };

      const updatedUsers = [...users, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    if (action.type === "users/loadUsers") {
      const usersData = localStorage.getItem("users") || "[]";
      const users = JSON.parse(usersData);

      action.payload = users;
    }

    if (action.type === "users/signIn" || action.type === "users/logOut") {
      const updatedUsers = users.map((user: User) => {
        if (user.login === action.payload.login) {
          return { ...user, isAuth: !user.isAuth };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    if (action.type === "users/toggleFavourite") {
      if (favourites) {
        let updatedFavourites: number[] = [];

        if (favourites.includes(action.payload)) {
          updatedFavourites = favourites.filter((id) => id !== action.payload);
        } else {
          updatedFavourites = [...favourites, action.payload];
        }

        const updatedUsers = users.map((user: User) => {
          if (user.isAuth === true) {
            return { ...user, favourites: updatedFavourites };
          }
          return user;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    }

    if (action.type === "users/addHistory") {
      let updatedHistory = history?.filter((url) => url !== action.payload);
      updatedHistory?.push(action.payload);

      const updatedUsers = users.map((user: User) => {
        if (user.isAuth === true) {
          return { ...user, history: updatedHistory };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    if (action.type === "users/removeHistory") {
      const updatedHistory = history?.filter((url) => url !== action.payload);

      const updatedUsers = users.map((user: User) => {
        if (user.isAuth === true) {
          return { ...user, history: updatedHistory };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    return next(action);
  };
