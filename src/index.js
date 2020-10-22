import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
import GlobalStyles from "./globalStyles";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
