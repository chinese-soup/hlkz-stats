import React, { useState, useEffect } from "react";
import axios from "axios";
import Purefeed from "../components/latestPureWRs";
import Loader from "react-loader-spinner";

function Runfeed() {
  const [purefeed, setPurefeed] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/stats/purefeed").then((response) => {
      setLoading(false);
      setPurefeed(response.data.data);
    });
  }, []);

  const [livefeed, setLivefeed] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/stats/livefeed").then((response) => {
      setLivefeed(response.data.data);
    });
  }, []);

  return (
    <div className="section livefeed" id="feed">
      <div className="container">
        <p className="feed-description"></p>
        <div className="row">
          <div className="one-half column">
            <h3 className="feed-multiplier">
              <i className="fab fa-accessible-icon"></i> Latest runs
            </h3>
            {isLoading && (
              <center>
                <Loader
                  type="ThreeDots"
                  color="#1eaedb"
                  height={50}
                  width={50}
                  timeout={5000}
                />
              </center>
            )}
            {!isLoading && (
              <ul style={{ textAlign: `left`, width: `85%`, margin: `0 auto` }}>
                {livefeed.map((feed, i) => (
                  <Purefeed key={i} feed={feed} />
                ))}
              </ul>
            )}
          </div>
          <div className="one-half column">
            <h3 className="feed-multiplier">
              <i className="fas fa-trophy"></i> Latest Pure WRs
            </h3>
            {isLoading && (
              <center>
                <Loader
                  type="ThreeDots"
                  color="#1eaedb"
                  height={50}
                  width={50}
                  timeout={5000}
                />
              </center>
            )}
            {!isLoading && (
              <ul style={{ textAlign: `left`, width: `85%`, margin: `0 auto` }}>
                {purefeed.map((feed, i) => (
                  <Purefeed key={i} feed={feed} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* <a className="button button-primary" href="#browse">
          Browse all
        </a> */}
      </div>
    </div>
  );
}

export default Runfeed;
