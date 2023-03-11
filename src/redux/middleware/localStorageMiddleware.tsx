import { Middleware } from "redux";
import { RootState } from "../store";

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type === "users/addUser") {
      const usersData = localStorage.getItem("users") || "[]";
      let users = JSON.parse(usersData);

      const newUser = {
        login: action.payload.login,
        password: action.payload.password,
        isAuth: true,
        favourites: [],
        history: [],
      };

      users = [...users, newUser];

      localStorage.setItem("users", JSON.stringify(users));
    }

    return next(action);
  };
