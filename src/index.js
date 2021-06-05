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
import Navbar from "./components/navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <div>
      <Navbar />

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
