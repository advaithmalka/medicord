import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../context";

export default function PrivateRoute({ component: Component, ...rest }) {
  const context = useContext(Context);

  return (
    <Route
      {...rest}
      render={(props) => {
        return context.user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
