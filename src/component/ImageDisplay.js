import React from "react";

const ImageDisplay = ({ uri }) => {
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: 8,
      }}
    >
      <img src={uri} style={{ height: 500, width: 1000, flex: 1 }} />
    </div>
  );
};

export default ImageDisplay;
