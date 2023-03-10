import { Middleware } from "redux";
import { RootState } from "../store";
import { selectUsers } from "../usersSlice";

export const checkAuthDataMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const state = store.getState();
    const users = selectUsers(state);

    if (action.type === "users/addUser") {
      const user = users.find((user) => user.login === action.payload.login);

      if (user) {
        alert("User with this login already exists");

        return;
      }
    }

    if (action.type === "users/signIn") {
      const user = users.find((user) => user.login === action.payload.login);

      if (user) {
        const isPasswordCorrect = user.password === action.payload.password;

        if (!isPasswordCorrect) {
          alert("Incorrect password");

          return;
        }
      } else {
        alert("User with this login doesn't exist");

        return;
      }
    }

    return next(action);
  };
