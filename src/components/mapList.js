import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

const MapList = ({ map }) => {
  return (
    <tr>
      <td>
        <Link to={`/maps/${map.name}`}>{map.name}</Link>
      </td>
      <td>{map.playersTotal}</td>
    </tr>
  );
};

export default MapList;
