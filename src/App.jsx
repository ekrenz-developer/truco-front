import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Room from "./containers/room/Room";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Room} />
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
