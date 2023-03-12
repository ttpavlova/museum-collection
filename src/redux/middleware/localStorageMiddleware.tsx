import { Middleware } from "redux";
import { RootState } from "../store";
import { User } from "../usersSlice";

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

    if (action.type === "users/loadUsers") {
      const usersData = localStorage.getItem("users") || "[]";
      const users = JSON.parse(usersData);

      action.payload = users;
    }

    if (action.type === "users/signIn" || action.type === "users/logOut") {
      const usersData = localStorage.getItem("users") || "[]";
      const users = JSON.parse(usersData);

      const updatedUsers = users.map((user: User) => {
        if (user.login === action.payload.login) {
          return { ...user, isAuth: !user.isAuth };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    return next(action);
  };
