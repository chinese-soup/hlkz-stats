import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home.page";
import Players from "./pages/players.page";
import Maps from "./pages/maps.page";
import PageNotFound from "./pages/404.page";
import MapLeaderboard from "./pages/mapLeaderboard.page";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import axios from "axios";

function App() {
  return (
    <div>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/maps">
              <i className="far fa-map"></i> Maps
            </Link>
          </li>
          <li>
            <Link to="/players">
              <i className="fas fa-walking"></i> Players
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/maps/:map" component={MapLeaderboard} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/" component={Home} />
        <Route render={() => <PageNotFound />} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
