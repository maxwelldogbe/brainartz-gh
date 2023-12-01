import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/Nav.css";
import "./css/social.css";
import Navigation from "./components/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Service from "./components/services";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation sticky="top"/>
    <Routing />
  </React.StrictMode>
);