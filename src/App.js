import "./App.css";
import React from "react";
import CreateTask from "./component/CreateTask";
import DisplayTask from "./component/DisplayTask";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <section className="container">
        <CreateTask />
        <DisplayTask />
      </section>
    </Provider>
  );
}

export default App;
