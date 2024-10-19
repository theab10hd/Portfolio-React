import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./assets/Components/Header/Header";
import About from "./assets/Components/About/About";
import Projects from "./assets/Components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
