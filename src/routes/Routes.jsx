import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";

export function ControladorDeRotas() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </React.Fragment>
  );
}
