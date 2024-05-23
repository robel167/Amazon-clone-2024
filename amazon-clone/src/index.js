import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { DataProvider } from "./Components/Data/DataProvider.jsx";

import { intialState, reducer } from "./Utility/reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DataProvider reducer={reducer} intialState={intialState}>
            <App />
        </DataProvider>
    </React.StrictMode>
);
