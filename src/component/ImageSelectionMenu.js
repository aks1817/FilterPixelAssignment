import React from "react";
import Imagecard from "./ImageCard";
import { arrayDummyImage } from "../Constants";

const ImageSelectionMenu = ({
  setActiveImage,
  setActiveImageIndex,
  activeImageIndex,
}) => {
  const onImageClick = (index, uri) => {
    setActiveImage(uri);
    setActiveImageIndex(index);
    console.log("Image", uri, "Index", index);
  };
  return (
    <div
      style={{
        background: "#262626",
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        height: 150,
        marginTop: 20,
        paddingInlineEnd: 8,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <div style={{ padding: "0 8px", flexDirection: "row", display: "flex" }}>
        {arrayDummyImage.map((item, index) => (
          <Imagecard
            imageUri={item.uri}
            key={index}
            onClick={onImageClick}
            index={index}
            activeImageIndex={activeImageIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSelectionMenu;
