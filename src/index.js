import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./store/meteor-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>
);
