import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import store from "./store/store";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/f8-zoom-day41">
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
