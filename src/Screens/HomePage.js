import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/task";
import PropTypes from "prop-types";
import Header from "../component/Header";
import ImageDisplay from "../component/ImageDisplay";
import ImageInfo from "../component/ImageInfo";
import ImageSelectionMenu from "../component/ImageSelectionMenu";
import { arrayDummyImage } from "../Constants";

const NumImage = ({ countOfImage }) => {
  return (
    <div
      style={{
        height: "30px",
        marginTop: 30,
        paddingLeft: 16,
        color: "#fff",
        fontSize: "18px",
      }}
    >
      Showing {countOfImage} Photos
    </div>
  );
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
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#1b1b1b",
      }}
    >
      <Header />
      <div style={{ flexDirection: "row", display: "flex" }}>
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
