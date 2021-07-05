import { combineReducers } from "@reduxjs/toolkit";
import { slidebarMenu } from "./slidebarReducer";
import { userState } from "./userReducer";

export default combineReducers({
    slidebarMenu,
    userState
}) 