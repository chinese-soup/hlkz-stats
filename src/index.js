import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home.page";
import Players from "./pages/players.page";
import Info from "./pages/info.page";
import Maps from "./pages/maps.page";
import PageNotFound from "./pages/404.page";
import MapLeaderboard from "./pages/mapLeaderboard.page";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

TimeAgo.addDefaultLocale(en);

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
          <li>
            <Link to="/info">
              <i className="fas fa-question-circle"></i> Info
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/maps/:map" component={MapLeaderboard} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/info" component={Info} />
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
