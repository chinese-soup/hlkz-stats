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
      <Server country="uk" address="212.71.238.124:27015"></Server>
      <Server country="us" address="173.255.224.173:27015"></Server>
      <Server country="de" address="139.162.187.16:27015"></Server>
      <Server country="fi" address="95.216.211.173:27015"></Server>
      <Server country="de" address="78.46.191.68:27015" desc="100aa"></Server>
      <Server country="nl" address="108.61.99.176:27016"></Server>
    </ul>
  );
};

export default ServerList;
