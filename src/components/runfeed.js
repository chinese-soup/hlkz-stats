import React, { useState, useEffect } from "react";
import Purefeed from "../components/latestPureWRs";
import apiclient from "../apiclient";
import FeedLoader from "./placeholders/feedLoader";

function Runfeed() {
  const [purefeed, setPurefeed] = useState([]);
  const [livefeed, setLivefeed] = useState([]);

  const loadPurefeed = () => {
    apiclient.get("/stats/purefeed").then((response) => {
      setPurefeed(response.data.data);
    });
  };

  const loadLivefeed = () => {
    apiclient.get("/stats/livefeed").then((response) => {
      setLivefeed(response.data.data);
    });
  };

  useEffect(() => {
    loadPurefeed();

    const interval = setInterval(() => {
      loadPurefeed();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadLivefeed();

    const interval = setInterval(() => {
      loadLivefeed();
    }, 5000);

    return () => clearInterval(interval);
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
            {livefeed.length === 0 && <FeedLoader />}
            {livefeed.length > 0 && (
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
            {purefeed.length === 0 && <FeedLoader />}
            {purefeed.length > 0 && (
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
