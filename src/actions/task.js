import { v4 as uuid } from "uuid";
import { ADD_TASK, REMOVE_TASK } from "./types";

const addTask = (text) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: ADD_TASK,
    payload: { text, id },
  });
};

const removeTask = (id) => (dispatch) => {
  dispatch({ type: REMOVE_TASK, payload: id });
};

export { addTask, removeTask };
