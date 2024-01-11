import React, { useState } from "react";
import Header from "../component/Header";
import ImageDisplay from "../component/ImageDisplay";
import ImageInfo from "../component/ImageInfo";
import ImageSelectionMenu from "../component/ImageSelectionMenu";
import { arrayDummyImage } from "../Constants";
import {
  container,
  imageCountContainer,
  subContainer,
} from "../component/Styles";

const NumImage = ({ countOfImage }) => {
  return <div style={imageCountContainer}>Showing {countOfImage} Photos</div>;
};
const HomePage = () => {
  const [activeImage, setActiveImage] = useState(arrayDummyImage[0].uri);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div style={container}>
      <Header />
      <div style={subContainer}>
        <div>
          <NumImage countOfImage={arrayDummyImage.length} />
          <ImageDisplay uri={activeImage} />
        </div>
        <ImageInfo />
      </div>
      <ImageSelectionMenu
        setActiveImage={setActiveImage}
        setActiveImageIndex={setActiveImageIndex}
        activeImageIndex={activeImageIndex}
      />
    </div>
  );
};

export default HomePage;
