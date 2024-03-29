import { Middleware } from "redux";
import { RootState } from "../store";
import { User } from "../usersSlice";

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const users = store.getState().users.users;
    const user = users.find((user) => user.isAuth);
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

        const updatedUsers = getUpdatedUsers("favourites", updatedFavourites);

        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    }

    if (action.type === "users/addHistory") {
      let updatedHistory = history?.filter((url) => url !== action.payload);
      updatedHistory?.push(action.payload);

      const updatedUsers =
        updatedHistory && getUpdatedUsers("history", updatedHistory);

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    if (action.type === "users/removeHistory") {
      const updatedHistory = history?.filter((url) => url !== action.payload);

      const updatedUsers =
        updatedHistory && getUpdatedUsers("history", updatedHistory);

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    if (action.type === "users/clearHistory") {
      const updatedHistory: string[] = [];

      const updatedUsers = getUpdatedUsers("history", updatedHistory);

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    function getUpdatedUsers(
      fieldName: string,
      updatedField: number[] | string[]
    ) {
      const updatedUsers = users.map((user: User) => {
        if (user.isAuth) {
          return { ...user, [fieldName]: updatedField };
        }
        return user;
      });

      return updatedUsers;
    }

    return next(action);
  };
