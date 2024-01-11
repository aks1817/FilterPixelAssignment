import "./App.css";
import React from "react";
import HomePage from "./Screens/HomePage";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <section className="container">
        <HomePage />
      </section>
    </Provider>
  );
}

export default App;
