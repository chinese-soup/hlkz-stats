import React from "react";
import MapRecords from "./mapRecords";
import LoadingSpinner from "../components/loadingSpinner";

function MapHeader({ records, mapName, times, isLoadingHeader }) {
  return (
    <div className="mapheader-root">
      <div
        className="mapheader-image"
        style={{
          backgroundImage: `url("../images/maps/${mapName}.jpg"), url("../images/background.jpg")`,
        }}
      ></div>
      <div className="mapheader" id="mapheader">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <h2 className="mapheader-multiplier">{mapName}</h2>
              <div>{isLoadingHeader && <LoadingSpinner />}</div>
              {!isLoadingHeader && (
                <div>
                  <h5 className="mapheader-heading">
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
                  <p className="mapheader-description"></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHeader;
