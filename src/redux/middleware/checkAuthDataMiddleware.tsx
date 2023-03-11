import { Middleware } from "redux";
import { RootState } from "../store";
import { selectUsers } from "../usersSlice";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

export const checkAuthDataMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const state = store.getState();
    const users = selectUsers(state);

    if (action.type === "users/addUser") {
      const user = users.find((user) => user.login === action.payload.login);

      if (user) {
        throw new AuthError("User with this login already exists");
      }
    }

    if (action.type === "users/signIn") {
      const user = users.find((user) => user.login === action.payload.login);

      if (user) {
        const isPasswordCorrect = user.password === action.payload.password;

        if (!isPasswordCorrect) {
          throw new AuthError("Login or password is incorrect");
        }
      } else {
        throw new AuthError("User with this login doesn't exist");
      }
    }

    return next(action);
  };
