import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
    name : "authentication",
    initialState : {/*isAuthenticated : false,
                    userId : null,
                    userName : null,
                    userEmail : null,
                    tokenType : null,
    token : null*/
    isAuthenticated : true,
    userId : 1,
    userName : "Akshat Gadodia",
    userEmail : "akshatgadodia@gmail.com",
    tokenType : "Bearer",
token : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJha3NoYXRnYWRvZGlhQGdtYWlsLmNvbSIsImlhdCI6MTY1NTkyMTY5MCwiZXhwIjoxNjU2NTI2NDkwfQ.25Z638cY4QMqNEmV_8NO3cd3S0TDIUCWP9gWuYs5ZaVM6eTkiurkEJpkLTVqmh_jIvtqfM0yvpMsJy5vciZ4xA"},
    reducers : {
        setAuthentication : (state,action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.tokenType = action.payload.tokenType
            state.token = action.payload.accessToken
        }/*,
        setIsAuthenticated : (state,action) => {
            state.isAuthenticated = action.payload
        },
        setUserId : (state,action) => {
            state.userId = action.payload
        },
        setUserName : (state,action) => {
            state.userName = action.payload
        },
        setUserEmail : (state,action) => {
            state.userEmail = action.payload
        },
        setTokenType : (state,action) => {
            state.tokenType = action.payload
        },
        setToken : (state,action) => {
            state.token = action.payload
        }*/
    }
});

const AuthenticationActions = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
export {AuthenticationActions};