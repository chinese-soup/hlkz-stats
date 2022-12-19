import React, { useState, useRef } from "react";

const ShowMoreButton = ({ totalMapCount, isLoading, setIndex }) => {
  const [isLoaded, setLoaded] = useState(false);
  const ref = useRef(100);

  const handleShowMore = () => {
    setIndex((ref.current += 100));
    if (ref.current > totalMapCount) {
      setLoaded(true);
    }
  };
  return (
    <div>
      {!isLoaded && !isLoading && (
        <div className="button button-primary" onClick={handleShowMore}>
          Show more
        </div>
      )}
    </div>
  );
};

export default ShowMoreButton;
