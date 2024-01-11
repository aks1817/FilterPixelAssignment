import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./Screens/HomePage";

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
