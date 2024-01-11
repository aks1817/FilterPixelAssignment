import { ADD_TASK, REMOVE_TASK } from "../actions/types";
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [...state, payload]; //we are adding payload into the state
    case REMOVE_TASK:
      return state.filter((task) => task.id !== payload);
    default:
      return state;
  }
}
