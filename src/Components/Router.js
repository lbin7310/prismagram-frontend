import PropTypes from "prop-types";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
)
const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AuthRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>
      {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </Switch>
  </Router>
)

AuthRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default AuthRouter;