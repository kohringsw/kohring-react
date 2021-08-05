import React, { lazy, Suspense, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const ContactForm = lazy(() => import("./components/Contact"));
const Design = lazy(() => import("./components/Design"));
const Development = lazy(() => import("./components/Development"));
const Resume = lazy(() => import("./components/Resume"));

function App() {
  const [sectionSelected, setSectionSelected] = useState("About");

  return (
    <div>
      <Header
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      />
      <div>
        {sectionSelected === "About" && (
          <Suspense fallback={<div className=" d-flex justify-content-center m-5">LOADING...</div>}>
            <About key="about-key" />
          </Suspense>
        )}
        {sectionSelected === "Design" && (
          <Suspense fallback={<div className=" d-flex justify-content-center m-5">LOADING...</div>}>
            <Design key="design-key" />
          </Suspense>
        )}
        {sectionSelected === "Development" && (
          <Suspense fallback={<div className=" d-flex justify-content-center m-5">LOADING...</div>}>
            <Development key="development-key" />
          </Suspense>
        )}
        {sectionSelected === "Contact" && (
          <Suspense fallback={<div className=" d-flex justify-content-center m-5">LOADING...</div>}>
            <ContactForm key="contact-key" />
          </Suspense>
        )}
        {sectionSelected === "Resume" && (
          <Suspense fallback={<div className=" d-flex justify-content-center m-5">LOADING...</div>}>
            <Resume key="resume-key" />
          </Suspense>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
