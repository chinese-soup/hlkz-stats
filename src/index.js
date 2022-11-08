import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home.page";
import Players from "./pages/players.page";
import Info from "./pages/info.page";
import Maps from "./pages/maps.page";
import PageNotFound from "./pages/404.page";
import MapLeaderboard from "./pages/mapLeaderboard.page";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Navbar from "./components/navbar";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/maps" element={<Maps />} />
        <Route path="/maps/:map" element={<MapLeaderboard />} />
        <Route path="/players" element={<Players />} />
        <Route path="/info" element={<Info />} />
        <Route path="/" element={<Home />} />
        <Route render={() => <PageNotFound />} />
      </Routes>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
