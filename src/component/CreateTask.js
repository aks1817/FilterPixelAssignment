import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/task";
import PropTypes from "prop-types";

const CreateTask = ({ addTask }) => {
  const [taskData, setTaskData] = useState({
    text: "",
  });

  const { text } = taskData;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
  };

  const onChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Add a task"
              name="text"
              value={text}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" value="Register" />
        </form>
      </center>
    </div>
  );
};

CreateTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(CreateTask);
