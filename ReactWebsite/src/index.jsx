import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CurrentUserProvider } from "./userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </div>
);
