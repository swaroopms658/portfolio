import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Scene3D from "./components/Scene3D";

function App() {
  return (
    <Router>
      <div className="App">
        <Scene3D />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Skills />
                <Projects />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
