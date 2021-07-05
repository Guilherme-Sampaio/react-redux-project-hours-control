import { USER_TYPE } from "../types/userType";

const user = JSON.parse(sessionStorage.getItem("user"));

const initialState = {
  user: Boolean(user) ? user : {},
  isLogged: Boolean(user),
};

export const userState = (state = initialState, action) => {
  const { type, user, isLogged } = action;
  if (type === USER_TYPE) {
    if (user && !isLogged) {
      return {
        ...state,
        user: user,
      };
    } else if (isLogged && !user) {
      return {
        ...state,
        isLogged: isLogged,
      };
    }

    return {
      ...state,
      user: user,
      isLogged: isLogged,
    };
  }

  return state;
};
