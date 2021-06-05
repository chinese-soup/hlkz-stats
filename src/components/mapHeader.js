import React from "react";
import MapRecords from "./mapRecords";
import LoadingSpinner from "../components/loadingSpinner";

function MapHeader({ records, mapName, times, isLoading, isLoadingHeader }) {
  return (
    <div className="section intro" id="intro">
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <h2 className="intro-multiplier">{mapName}</h2>
            <div>{isLoadingHeader && <LoadingSpinner />}</div>
            {!isLoading && !isLoadingHeader && (
              <div>
                <h5 className="intro-heading">
                  {records.length === 0 && (
                    <div>Nobody has beaten this map yet :(</div>
                  )}
                  {records.length > 0 && (
                    <div>
                      {records.map((record, i) => (
                        <MapRecords key={i} record={record} times={times} />
                      ))}
                    </div>
                  )}
                </h5>
                <p className="intro-description"></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHeader;
