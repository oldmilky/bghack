import React from "react";
import ContentLoader from "react-content-loader";

const Skeletons = props => (
  <ContentLoader
    speed={2}
    viewBox="0 0 360 270"
    height={270}
    width={360}
    {...props}
    backgroundColor="#27292E"
    foregroundColor="#2A2D32"
  >
    <rect x="16" y="17" rx="10" ry="10" width="360" height="270" />
  </ContentLoader>
);

export default Skeletons;
