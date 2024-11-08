import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
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
        {/* Sections with IDs for chatbot navigation */}
        <div id="home">
          <LandingPage />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
