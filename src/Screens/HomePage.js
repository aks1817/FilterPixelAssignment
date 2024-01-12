import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/dataSlice";

const NumImage = ({ countOfImage }) => {
  return <div style={imageCountContainer}>Showing {countOfImage} Photos</div>;
};
const HomePage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [activeImage, setActiveImage] = useState(arrayDummyImage[0].uri);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div style={container}>
      <Header />
      {loading ? (
        <div
          style={{
            justifyContent: "center",
            color: "#fff",
            display: "flex",
            margin: 100,
          }}
        >
          Loading...
        </div>
      ) : (
        <>
          <div style={subContainer}>
            <div>
              <NumImage countOfImage={arrayDummyImage.length} />
              <ImageDisplay uri={activeImage} />
            </div>
            <ImageInfo activeImageIndex={activeImageIndex} />
          </div>
          <ImageSelectionMenu
            setActiveImage={setActiveImage}
            setActiveImageIndex={setActiveImageIndex}
            activeImageIndex={activeImageIndex}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
