import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./Dashboard.js";

library.add(faFacebookF, faGoogle, faLinkedinIn, faKey, faEnvelope);

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
