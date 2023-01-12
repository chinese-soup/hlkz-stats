import React, { useEffect, useRef, useState } from "react";

const ShowMoreButton = ({ totalMapCount, isLoading, setIndex }) => {
  const ref = useRef(100);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    // Listen to totalMapCount updates and set loaded state accordingly
    if (ref.current > totalMapCount) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [totalMapCount]);

  const handleShowMore = () => {
    // Increase the map count
    setIndex((ref.current += 100));
    if (ref.current > totalMapCount) {
      // We have exhausted all maps
      setLoaded(true);

      // Reset the index so it's not higher than totalMapCount anymore
      ref.current = totalMapCount;
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
