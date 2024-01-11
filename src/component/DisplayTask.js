import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeTask } from "../actions/task";
const DisplayTask = ({ task, removeTask }) => {
  const deleteTask = (id) => {
    console.log(id);
    removeTask(id);
  };

  return (
    task !== null &&
    task.length > 0 &&
    task.map((item) => (
      <div key={item.id} className="alert alert-success">
        {item.text}
        <button
          style={{ float: "right", backgroundColor: "red" }}
          onClick={() => deleteTask(item.id)}
        >
          Delete
        </button>
      </div>
    ))
  );
};

DisplayTask.propTypes = {
  task: PropTypes.array.isRequired,
  removeTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, { removeTask })(DisplayTask);
