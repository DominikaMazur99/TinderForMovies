import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
    worker.start();
} else {
    console.log("Jestem w trybie produkcyjnym!");
    if (window.location.origin.includes("dominikamazur99.github.io")) {
        worker.start({
            serviceWorker: {
                url: "/TinderForMovies/mockServiceWorker.js", // Użyj pełnej ścieżki uwzględniającej nazwę repozytorium
            },
        });
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
