import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Particles from "./components/particles/backgroundparticles";
import Work from "./components/work/work";
import Footer from "./components/footer/footer";
import Achievements from "./components/achievements/achievements";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <>
      <Header />
      <Particles />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
