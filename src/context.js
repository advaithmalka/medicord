import React, { createContext, useReducer } from "react";
import decodeJWT from "jwt-decode";

const token = localStorage.getItem("medicord-token");
let decodedToken;
let auth = false;
if (token) {
  auth = true;
  decodedToken = decodeJWT(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("medicord-token");
    auth = false;
  }
}
export const Context = createContext({
  user: null,
  loginUser: () => undefined,
  logoutUser: () => undefined,
});

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export const ContextProvider = props => {
  const [state, dispatch] = useReducer(Reducer, {
    user: auth ? decodedToken : null,
  });
  const loginUser = data => {
    localStorage.setItem("medicord-token", data.token);
    dispatch({
      type: "LOGIN_USER",
      payload: data,
    });
  };
  const logoutUser = () => {
    localStorage.removeItem("medicord-token");
    dispatch({
      type: "LOGOUT_USER",
    });
  };
  return (
    <Context.Provider
      value={{
        user: state.user,
        loginUser,
        logoutUser,
      }}
      {...props}
    >
      {props.children}
    </Context.Provider>
  );
};
