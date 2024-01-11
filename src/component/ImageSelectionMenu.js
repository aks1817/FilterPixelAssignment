import React from "react";
import Imagecard from "./ImageCard";
import { arrayDummyImage } from "../Constants";
import {
  imageSelectionMenuContainer,
  scrollbarStyles,
  selectionMenuItemContainer,
} from "./Styles";

const ImageSelectionMenu = ({
  setActiveImage,
  setActiveImageIndex,
  activeImageIndex,
}) => {
  const onImageClick = (index, uri) => {
    setActiveImage(uri);
    setActiveImageIndex(index);
  };
  return (
    <div style={imageSelectionMenuContainer}>
      <div style={selectionMenuItemContainer}>
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
      <style>{scrollbarStyles}</style>
    </div>
  );
};

export default ImageSelectionMenu;
