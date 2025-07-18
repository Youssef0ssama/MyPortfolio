import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Portfolio/Navigation";
import Hero from "./components/Portfolio/Hero";
import About from "./components/Portfolio/About";
import Projects from "./components/Portfolio/Projects";
import Skills from "./components/Portfolio/Skills";
import Contact from "./components/Portfolio/Contact";
import Footer from "./components/Portfolio/Footer";

const basename = import.meta.env.VITE_BASE_PATH || "/";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;