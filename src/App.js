import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "./index.css";

function App() {
  const [sectionSelected, setSectionSelected] = useState("About");

  return (
    <div>
      <Header
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      />
      <div>
        {sectionSelected === "About" && <About key="about-key" />}
        {sectionSelected === "Project" && <Projects key="projects-key" />}
        {sectionSelected === "Contact" && <ContactForm key="contact-key" />}
        {sectionSelected === "Resume" && <Resume key="resume-key" />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
