import React, { useRef } from "react";
import logo from "./assets/db-logo.png";
import resumePDF from "./assets/dallin-breen-resume.pdf";
import html from "./assets/tech-logos/html-logo.png";
import css from "./assets/tech-logos/css-logo.png";
import js from "./assets/tech-logos/js-logo.png";
import react from "./assets/tech-logos/react-logo.webp";
import express from "./assets/tech-logos/express-js.png";
import node from "./assets/tech-logos/nodejs-logo.png";
import spring from "./assets/tech-logos/spring-logo.png";
import java from "./assets/tech-logos/java-logo.png";
import postgresql from "./assets/tech-logos/postgresql.png";
import aws from "./assets/tech-logos/aws-logo.png";

import "./App.css";

function App() {
  const logos = [
    { url: html, name: "HTML" },
    { url: css, name: "CSS" },
    { url: js, name: "JavaScript" },
    { url: react, name: "React" },
    { url: express, name: "Express" },
    { url: node, name: "Node" },
    { url: spring, name: "Spring" },
    { url: java, name: "Java" },
    { url: postgresql, name: "PostgreSQL" },
    { url: aws, name: "AWS" },
  ];
  const homeRef = useRef(null);
  const technologyRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToRef(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <section className="hero" ref={homeRef}>
        <header>
          <div className="logo" onClick={() => scrollToRef(homeRef)}>
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li onClick={() => scrollToRef(technologyRef)}>Technology</li>
            </ul>
            <ul>
              <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
            </ul>
            <ul>
              <li onClick={() => scrollToRef(aboutRef)}>About Me</li>
            </ul>
            <ul>
              <li onClick={() => scrollToRef(contactRef)}>Contact Me</li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://github.com/GucciHepcat52"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="hero-inner">
          <p className="hero-subheading">Hi, I'm Dallin Breen. I am a </p>
          <div className="hero-heading">
            <h1>Software Developer</h1>
          </div>
          <p className="hero-intro">
            I build effective and efficient technology, designed to help the
            world become a better place!
          </p>
          <div className="hero-links">
            <button onClick={() => scrollToRef(projectsRef)}>
              My Projects
            </button>
            <a download="dallin-breen-resume.pdf" href={resumePDF}>
              Resume
            </a>
          </div>
        </div>
      </section>
      <section className="technology" ref={technologyRef}>
        <div className="technology-inner">
          <h1>TECHNOLOGY</h1>
          <div className="technology-container">
            {logos.map((tech, index) => (
              <div className="single-stack" key={index}>
                <img src={tech.url} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
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
