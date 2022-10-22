import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import CommonRouter from "Routing/CommonRouter";

import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CommonRouter />
    </Provider>
  </React.StrictMode>
);
