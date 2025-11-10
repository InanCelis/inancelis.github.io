
import React from "react";
import ReactDOM from "react-dom/client";
import { hydrate, render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from './App';
import '../src/assets/styles/App.scss';

const rootElement = document.getElementById("root");

// Check if the page was prerendered by react-snap
if (rootElement.hasChildNodes()) {
  // Use hydrate for prerendered content
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  // Use render for client-side only
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
