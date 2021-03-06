import React from "react";
import { Provider } from "react-redux";

import Home from "./Views/Home";
import "./App.css";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
