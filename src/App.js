import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./assets/css/style.css";
import Navbar from "./pages/components/navbar.js";
import Home from "./pages/home/index";
import Porfolio from "./pages/portfolio/index";
import Resume from "./pages/resume";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
