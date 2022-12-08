import NavBar from "./navigation/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import Projects from "./pages/Projects";
import WorkWithUs from "./pages/WorkWithUs";
import Education from "./pages/Education";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Join" element={<Join />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/WorkWithUs" element={<WorkWithUs />}></Route>
          <Route path="/Education" element={<Education />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
