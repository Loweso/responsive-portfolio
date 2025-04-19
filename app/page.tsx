import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const Navbar = () => {
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
      <section className="hero-section" id="hero">
        <div className="hero-title-container">
          <div className="hero-title">DEIPARINE</div>
          <div className="hero-subtitle">LOUISE FERMIN</div>
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
                        src={skill.src}
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
                        src={skill.src}
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
                        src={skill.src}
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
          <div className="project-card">
            <div className="project-card-inner">
              <div
                className="project-card-front"
                style={{
                  backgroundImage: "url('/assets/projects/beacon.png')",
                }}
              ></div>
              <div className="project-card-back">
                <h3>Beacon</h3>

                <div className="project-techstack-container">
                  <Image
                    src="/assets/skills-logos/nextJS-black.svg"
                    alt="Next.js"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/tailwind.png"
                    alt="TailwindCSS"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/firebase.png"
                    alt="Firebase"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/openai.svg"
                    alt="OpenAI"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/langchain.png"
                    alt="LangChain"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                </div>

                <p>
                  A career guidance web app that uses Generative AI to provide
                  users with personalized visual road maps towards their viable
                  career option based on their user information
                </p>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-inner">
              <div
                className="project-card-front"
                style={{
                  backgroundImage: "url('/assets/projects/doorm.png')",
                }}
              ></div>
              <div className="project-card-back">
                <h3>Doorm</h3>

                <div className="project-techstack-container">
                  <Image
                    src="/assets/skills-logos/nextJS-black.svg"
                    alt="Next.js"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/expressJS-black.png"
                    alt="Express.js"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/mysql.png"
                    alt="mySQL"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                </div>

                <p>
                  A web application that connects prospective tenants and space
                  owners, providing a platform to arrange dormitory
                  accommodations seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-inner">
              <div
                className="project-card-front"
                style={{
                  backgroundImage: "url('/assets/projects/doorm.png')",
                }}
              ></div>
              <div className="project-card-back">
                <h3>Doorm</h3>

                <div className="project-techstack-container">
                  <Image
                    src="/assets/skills-logos/nextJS-black.svg"
                    alt="Next.js"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/expressJS-black.png"
                    alt="Express.js"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/assets/skills-logos/mysql.png"
                    alt="mySQL"
                    className="techstack-icon"
                    width={10}
                    height={10}
                  />
                </div>

                <p>
                  A web application that connects prospective tenants and space
                  owners, providing a platform to arrange dormitory
                  accommodations seamlessly.
                </p>
              </div>
            </div>
          </div>
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
              <button type="submit" className="submit-button">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
