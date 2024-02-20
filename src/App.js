import React, { useRef } from "react";

import "./App.css";

function App() {
  const technologyRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToRef(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <section className="hero">
        <header></header>
        <div className="hero-inner">
          <p className="hero-subheading">Hi, I'm Dallin Breen.</p>
          <div className="hero-heading"></div>
          <p className="hero-intro">
            I build effective and efficient technology, designed to help the
            world become a better place!
          </p>
          <div className="hero-links"></div>
        </div>
      </section>
      <section className="technology" ref={technologyRef}>
        <h1>Technology</h1>
        <div className="technology-container"></div>
      </section>
      <section className="projects" ref={projectsRef}>
        <h1>Projects</h1>
        <div className="project"></div>
      </section>
      <section className="about-me" ref={aboutRef}>
        <h1>About Me</h1>
        <div className="about-me-container"></div>
      </section>
      <section className="contact-me" ref={contactRef}>
        <h1>Contact Me</h1>
        <div className="contact-container"></div>
      </section>
    </div>
  );
}

export default App;
