import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import "./index.scss";
import App from "./App";

WebFont.load({
  google: {
    families: ["Big Shoulders Display"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
