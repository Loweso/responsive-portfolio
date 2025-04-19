"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const skillsMarquee1 = [
  {
    src: "/assets/skills-logos/javascript.png",
    alt: "JavaScript",
    name: "JavaScript",
  },
  {
    src: "/assets/skills-logos/typescript.png",
    alt: "TypeScript",
    name: "TypeScript",
  },
  { src: "/assets/skills-logos/python.png", alt: "Python", name: "Python" },
  { src: "/assets/skills-logos/c.png", alt: "C", name: "C" },
  { src: "/assets/skills-logos/c++.png", alt: "C++", name: "C++" },
];

const skillsMarquee2 = [
  { src: "/assets/skills-logos/react.png", alt: "React", name: "React" },
  { src: "/assets/skills-logos/nextJS.png", alt: "Next.js", name: "Next.js" },
  { src: "/assets/skills-logos/vue.png", alt: "Vue", name: "Vue" },
  {
    src: "/assets/skills-logos/react-native-1.svg",
    alt: "React Native",
    name: "React Native",
  },
];

const skillsMarquee3 = [
  {
    src: "/assets/skills-logos/tailwind.png",
    alt: "TailwindCSS",
    name: "TailwindCSS",
  },
  { src: "/assets/skills-logos/mongoDB.svg", alt: "mongoDB", name: "mongoDB" },
  {
    src: "/assets/skills-logos/expressJS.png",
    alt: "Express.JS",
    name: "Express.JS",
  },
  { src: "/assets/skills-logos/django.svg", alt: "Django", name: "Django" },
];

const projects = [
  {
    title: "Beacon",
    image: "/assets/projects/beacon.png",
    techstack: [
      { src: "/assets/skills-logos/nextJS-black.svg", alt: "Next.js" },
      { src: "/assets/skills-logos/tailwind.png", alt: "TailwindCSS" },
      { src: "/assets/skills-logos/firebase.png", alt: "Firebase" },
      { src: "/assets/skills-logos/openai.svg", alt: "OpenAI" },
      { src: "/assets/skills-logos/langchain.png", alt: "LangChain" },
    ],
    description:
      "A career guidance web app that uses Generative AI to provide users with personalized visual road maps towards their viable career option based on their user information.",
    externalLink: "https://beaconph.site",
    githubLink: "https://github.com/maxellmilay/beacon",
  },
  {
    title: "Doorm",
    image: "/assets/projects/doorm.png",
    techstack: [
      { src: "/assets/skills-logos/nextJS-black.svg", alt: "Next.js" },
      { src: "/assets/skills-logos/expressJS-black.png", alt: "Express.js" },
      { src: "/assets/skills-logos/mysql.png", alt: "mySQL" },
    ],
    description:
      "A web application that connects prospective tenants and space owners, providing a platform to arrange dormitory accommodations seamlessly.",
    externalLink: "",
    githubLink: "https://github.com/Loweso/doorm",
  },
  {
    title: "Rain de Luca in Action!",
    image: "/assets/projects/rainDeLuca.png",
    techstack: [{ src: "/assets/skills-logos/godot.png", alt: "Godot" }],
    description:
      "Developed using the Godot game engine, this Ace-Attorney inspired video game follows the trial of Alexa Yala, Rain de Luca's defendant for murder of Sirina Thirsty.",
    externalLink: "",
    githubLink: "https://github.com/Loweso/rain_deLuca",
  },
  {
    title: "UPokémon",
    image: "/assets/projects/UPokemon.png",
    techstack: [
      { src: "/assets/skills-logos/c++.png", alt: "C++" },
      { src: "/assets/skills-logos/sfml.png", alt: "SFML" },
    ],
    description:
      "Developed with C++ using the SFML library, this Pokémon-inspired video game challenges the player to defeat the Elite Four Trainers of UP Cebu using three random Pokémon per Trainer.",
    externalLink: "",
    githubLink: "https://github.com/Loweso/rain_deLuca",
  },
];

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="navbar">
        <nav className="nav-links">
          <Link href="#hero">HERO</Link>
          <Link href="#skills">SKILLS</Link>

          <Link href="#">
            <div className="signature-wrapper">
              <Image
                src="/assets/signature.png"
                alt="Signature"
                fill
                className="signature-img"
              />
            </div>
          </Link>

          <Link href="#projects">PROJECTS</Link>
          <Link href="#contact">CONTACT</Link>
        </nav>
      </header>

      <header className="mobile-navbar">
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <Link href="#hero" onClick={closeMenu} className="mobile-signature">
              <Image
                src="/assets/signature-black.png"
                alt="Signature"
                width={100}
                height={50}
              />
            </Link>
            <nav className="mobile-nav-links">
              <Link href="#hero" onClick={closeMenu}>
                HERO
              </Link>
              <Link href="#skills" onClick={closeMenu}>
                SKILLS
              </Link>
              <Link href="#projects" onClick={closeMenu}>
                PROJECTS
              </Link>
              <Link href="#contact" onClick={closeMenu}>
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero-section" id="hero">
        <Image
          src="/assets/hero-section/self.png"
          alt="Louise"
          className="hero-self"
          width={1500}
          height={1500}
        />
        <div className="hero-title-container">
          <div className="marquee-hero marquee-hero-left">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="hero-title">
                LOUISE
              </span>
            ))}
          </div>
          <div className="marquee-hero marquee-hero-left">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="hero-subtitle">
                DEIPARINE
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <p className="about-title">ABOUT ME</p>
          <p className="about-description">
            Currently a third-year BS Computer Science Student at the University
            of the Philippines Cebu, I&apos;m a passionate developer who thrives
            at the intersection of creativity and technology. I build impactful,
            design-forward solutions, blending technical precision with bold
            ideas.
            <br />
            <br />
            Whether it&apos;s crafting beautiful web experiences, solving
            real-world problems through tech, or leading innovation initiatives,
            I&apos;m driven by a vision:{" "}
            <span className="highlight">turn imagination into impact.</span>
          </p>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-title">SKILLS</div>
        <div className="skills-container">
          <div className="marquee-container">
            <div className="marquee marquee-left">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {skillsMarquee1.map((skill, index) => (
                    <div
                      className="marquee-item"
                      key={`${i}-${index}`}
                      title={skill.name}
                    >
                      <Image
                        src={skill.src || "/placeholder.svg"}
                        alt={skill.alt}
                        width={30}
                        height={30}
                        className="skill-icon"
                      />
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="marquee marquee-right">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {skillsMarquee2.map((skill, index) => (
                    <div
                      className="marquee-item"
                      key={`${i}-${index}`}
                      title={skill.name}
                    >
                      <Image
                        src={skill.src || "/placeholder.svg"}
                        alt={skill.alt}
                        width={30}
                        height={30}
                        className="skill-icon"
                      />
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="marquee marquee-left">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {skillsMarquee3.map((skill, index) => (
                    <div
                      className="marquee-item"
                      key={`${i}-${index}`}
                      title={skill.name}
                    >
                      <Image
                        src={skill.src || "/placeholder.svg"}
                        alt={skill.alt}
                        width={30}
                        height={30}
                        className="skill-icon"
                      />
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="gradient-overlay"></div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-title">PROJECTS</div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-inner">
                <div
                  className="project-card-front"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                  }}
                ></div>
                <div className="project-card-back">
                  <h3>{project.title}</h3>

                  <div className="project-techstack-container">
                    {project.techstack.map((tech, i) => (
                      <Image
                        key={i}
                        src={tech.src || "/placeholder.svg"}
                        alt={tech.alt}
                        className="techstack-icon"
                        width={10}
                        height={10}
                      />
                    ))}
                  </div>

                  <p>{project.description}</p>

                  {(project.externalLink || project.githubLink) && (
                    <div className="project-links">
                      {project.externalLink && (
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-title">CONTACT</div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-heading">
              <h2>
                Let&apos;s build something{" "}
                <span className="text-red">
                  <b>BOLD</b>
                </span>
              </h2>
              <h2>together.</h2>
            </div>
            <div className="contact-description">
              <p>
                Got a project, idea, or just want to say hi? Drop me a message
                and let&apos;s connect — I&apos;d love to hear from you!
              </p>
            </div>
            <div className="contact-details">
              <p>dlouisefermin@gmail.com</p>
              <p>(+63) 909 589 9627</p>
              <p>
                Gorordo Ave, Cebu City
                <br />
                6000 Cebu, Philippines
              </p>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name<span className="required">*</span>
                </label>
                <input type="text" id="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email<span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="project-info" className="form-label">
                  Message<span className="required">*</span>
                </label>
                <textarea
                  id="project-info"
                  className="form-textarea"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-button"
                onClick={() =>
                  alert(
                    "Thanks for reaching out! Sad to say, the contact section is still underway! I'll get back to you as soon as possible."
                  )
                }
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Louise Fermin Deiparine. All rights reserved.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Loweso"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/louise-fermin-deiparine-1b78a6295/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
