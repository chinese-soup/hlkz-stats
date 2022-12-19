import React, { useRef } from "react";

const ShowMoreButton = ({
  totalMapCount,
  isLoading,
  setIndex,
  isLoaded,
  setLoaded,
}) => {
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
