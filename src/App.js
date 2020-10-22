import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { IsUserRedirect, PrivateRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  const { user } = useAuthListener();
  console.log("User : ", user);
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
        <PrivateRoute user={user} exact path={ROUTES.BROWSE}>
          <Browse />
        </PrivateRoute>
        <IsUserRedirect
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
