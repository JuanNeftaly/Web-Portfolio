import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios"; // Important!!! ok bb
import "./index.css";

axios.defaults.baseURL = "https://api.nasa.gov"; // para las solicitudes por axios
axios.defaults.params = {}; // config predeterminada de axios
axios.defaults.params["api_key"] = "WRMA3wCsSio1W4ZQFUSa96XDs7cUjLUCbI3rG8A7"; // mi api key si sabe
axios.defaults.params["thumbs"] = "true"; // para imagenes en miniatura digo

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
