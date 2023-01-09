import React, { useRef, useState } from "react";

const ShowMoreButton = ({ totalMapCount, isLoading, setIndex }) => {
  const ref = useRef(100);
  const [isLoaded, setLoaded] = useState(false);
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
