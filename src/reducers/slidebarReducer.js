import { SLIDEBAR_MENU } from "../types/slidebarType";

export const initialState = {
  isVisible: false
};

export const slidebarMenu = (state = initialState, action) => {
  const { type, isVisible } = action;
  if (type === SLIDEBAR_MENU) {
    return {
      ...state,
      isVisible,
    };
  }

  return state;
};
