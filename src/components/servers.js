import React from "react";

const Server = ({ country, address, desc }) => {
  return (
    <li>
      <img
        src={"images/flags/" + country + ".png"}
        alt={"Server country flag " + country.toUpperCase()}
      ></img>{" "}
      <a href={"steam://connect/" + address}>{address}</a>
      {desc && " (" + desc + ")"}
    </li>
  );
};

const ServerList = () => {
  return (
    <ul style={{ listStyle: `none`, margin: `0 auto` }}>
      <Server country="se" address="play.sourceruns.org:27016"></Server>
      <Server country="uk" address="hlkz.openag.pro"></Server>
      <Server country="us" address="155.138.236.245"></Server>
      <Server country="de" address="139.162.187.16"></Server>
      <Server country="fr" address="45.76.46.156:27016" desc="100fps"></Server>
      <Server country="br" address="216.238.105.134"></Server>
      <Server country="nl" address="108.61.99.176:27016"></Server>
      <Server country="fr" address="45.76.46.156"></Server>
      <Server country="de" address="80.240.26.43"></Server>
    </ul>
  );
};

export default ServerList;
