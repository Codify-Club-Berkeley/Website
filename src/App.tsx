import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Projects from "./pages/Projects";
import WorkWithUs from "./pages/WorkWithUs";
import Education from "./pages/Education";
import Footer from "./navigation/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import NewNav from "./navigation/NewNav";

import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <div>
        <NewNav></NewNav>
      </div>
      <div style={{ paddingTop: "120px" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/workwithus" element={<WorkWithUs />}></Route>
          <Route path="/education" element={<Education />}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
