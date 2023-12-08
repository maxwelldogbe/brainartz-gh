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
import Section from "./components/Section";
import Photography from "./components/Photography";
import Software from "./components/Software";
import Graphic from "./components/Graphic";
import Branding from "./components/Branding"
import Textile from "./components/Textile"

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/section" element={<Section />} />
        <Route path="/graphic-design" element={<Graphic />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/textiles" element={<Textile />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/web-design" element={<Software />} />
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