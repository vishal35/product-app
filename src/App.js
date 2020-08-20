import React from "react";
// import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Routes } from "./common/Routes";

function App() {
  return (
    <Provider store={store}>
      <div className="App-header">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
