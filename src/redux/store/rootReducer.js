import { combineReducers } from "@reduxjs/toolkit";
import PhotoSlice from "./Slices/PhotoSlice";
import userSlice from "./Slices/userSlice";
import tokenSlice from "./Slices/tokenSlice";

const rootReducer = combineReducers({
    photo: PhotoSlice,
    token: tokenSlice,
    user: userSlice,
})

export default rootReducer;