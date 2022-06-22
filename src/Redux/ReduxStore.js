import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./AuthenticationSlice";

const ReduxStore = configureStore({
    reducer : {
        authentication : AuthenticationSlice
    }
});

export default ReduxStore;