import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home.page';
import Players from './pages/players.page';
import Maps from './pages/maps.page';
import PageNotFound from './pages/404.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom"

function App() {
  return (
      <div>
          <nav id="nav">
              <ul>
              <li><Link to="/"><i class="fas fa-home"></i> Home</Link></li>
              <li><Link to="/maps"><i class="far fa-map"></i> Maps</Link></li>
              <li><Link to="/players"><i class="fas fa-walking"></i> Players</Link></li>
              </ul>
          </nav>

          <Switch>
          <Route path="/maps">
          <Maps />
          </Route>
          <Route path="/players">
          <Players />
          </Route>
          {/* <Route render={() => <PageNotFound />} /> */}
          <Route path="/">
          <Home />
          </Route>
          </Switch>
      </div>
  )
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))