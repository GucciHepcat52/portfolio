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
import profile from "./assets/dallin-breen-profile.jpg";

import "./App.css";

function App() {
  const logos = [
    { url: html, name: "HTML" },
    { url: css, name: "CSS" },
    { url: js, name: "JavaScript" },
    { url: react, name: "React" },
    { url: express, name: "Express" },
    { url: node, name: "Node" },
    { url: java, name: "Java" },
    { url: spring, name: "Spring" },
    { url: postgresql, name: "PostgreSQL" },
    { url: aws, name: "AWS" },
  ];
  const homeRef = useRef(null);
  const technologyRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  // const contactRef = useRef(null);

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
            {/* <ul>
              <li onClick={() => scrollToRef(contactRef)}>Contact Me</li>
            </ul> */}
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
        <div className="projects-inner">
          <h1>PROJECTS</h1>
          <div className="projects-container">
            <div className="project">
              <h1>Hair by Maddy Kate</h1>
              <p>
                My wife is a hair stylist. This website was built for her
                business to help current and future clients find her and book
                with her easier.
              </p>
              <div className="tags">
                <span>React.js</span>
                <span>AWS</span>
              </div>
              <div className="project-buttons">
                <a
                  href="https://www.hairbymaddykate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Live Site</button>
                </a>
                <a
                  href="https://github.com/GucciHepcat52/hair-by-maddy-kate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Source Code</button>
                </a>
              </div>
            </div>
            <div className="project">
              <h1>My Money Map</h1>
              <p>
                I designed, developed, and deployed a cutting-edge finance
                application for both Android and iOS platforms for a client.
                Leveraging React Native, and Firebase technologies, I
                transformed financial management into a seamless and
                user-friendly experience that helped the financial situations of
                it's users by ~70%.
              </p>
              <div className="tags">
                <span>React-Native</span>
                <span>Google Firebase</span>
                <span>iOS</span>
                <span>Android</span>
              </div>
              <div className="project-buttons">
                <a
                  href="https://apps.apple.com/us/app/my-money-map/id6467692819"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>App Store</button>
                </a>
                <a
                  href="https://github.com/GucciHepcat52/financial_optimist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Source Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="projects-container">
            <div className="project">
              <h1>Gamerank</h1>
              <p>
                Gamerank is a site built for gamers. Discover, track, and
                download the worlds top games.
              </p>
              <div className="tags">
                <span>React.js</span>
                <span>Express.js</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
              </div>
              <div className="project-buttons">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6925955098640596992/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Site Demo</button>
                </a>
                <a
                  href="https://github.com/GucciHepcat52/Gamerank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Source Code</button>
                </a>
              </div>
            </div>
            <div className="project">
              <h1>Breen Chat</h1>
              <p>Built a family chat app using React.js and Google Firebase.</p>
              <div className="tags">
                <span>React.js</span>
                <span>Google Firebase</span>
              </div>
              <div className="project-buttons">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6938962298598281216/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>App Demo</button>
                </a>
                <a
                  href="https://github.com/GucciHepcat52/breen-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Source Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me" ref={aboutRef}>
        <div className="about-me-inner">
          <h1>ABOUT ME</h1>
          <div className="about-me-container">
            <img src={profile} alt="profile pic" />
            <div className="about-me-text">
              <p>
                Hi, my name is Dallin Breen, a full-stack software developer
                from Las Vegas with 3+ years of professional experience in the
                field. While playing collegiate football, I discovered my
                passion for software development when I changed my major from
                Business to Computer Science.
              </p>
              <br />
              <p>
                Beyond software development, I enjoy spending time with my
                family, going to the gym, and playing video games.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="contact-me" ref={contactRef}>
        <h1>Contact Me</h1>
        <div className="contact-container"></div>
      </section> */}
    </div>
  );
}

export default App;
