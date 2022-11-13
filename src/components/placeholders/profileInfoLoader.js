import React from "react";
import ContentLoader from "react-content-loader";

const ProfileInfoLoader = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={90}
    viewBox="0 0 320 100"
    backgroundColor="#c0bfbc"
    foregroundColor="#f6f5f4"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="320" height="55" />
    <rect x="0" y="65" rx="0" ry="0" width="120" height="25" />
    <rect x="140" y="65" rx="0" ry="0" width="180" height="25" />
  </ContentLoader>
);

export default ProfileInfoLoader;
