import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/task";
import PropTypes from "prop-types";
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
const HomePage = ({ addTask }) => {
  const [taskData, setTaskData] = useState({
    text: "",
  });
  const [activeImage, setActiveImage] = useState(arrayDummyImage[0].uri);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { text } = taskData;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
  };

  const onChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

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

HomePage.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(HomePage);
