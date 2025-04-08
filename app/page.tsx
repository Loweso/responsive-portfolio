import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <nav className="nav-links">
          <Link href="#">HERO</Link>
          <Link href="#">SKILLS</Link>

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

          <Link href="#">PROJECTS</Link>
          <Link href="#">CONTACT</Link>
        </nav>
      </header>
      <section className="skills-section">
        <p className="section-title">SKILLS</p>
        <div className="skills-container">
          <div className="marquee-container">
            <div className="marquee marquee-left">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/javascript.png"
                      alt="JavaScript"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">JavaScript</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/typescript.png"
                      alt="TypeScript"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">TypeScript</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/python.png"
                      alt="Python"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">Python</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/c.png"
                      alt="C"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">C</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/c++.png"
                      alt="C++"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">C++</div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="marquee marquee-right">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/react.png"
                      alt="React"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">React</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/nextJS.png"
                      alt="Next.js"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">Next.js</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/vue.png"
                      alt="Vue"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">Vue</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/react-native-1.svg"
                      alt="React Native"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">React Native</div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="marquee marquee-left">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/tailwind.png"
                      alt="TailwindCSS"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">TailwindCSS</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/mongoDB.svg"
                      alt="mongoDB"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">mongoDB</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/expressJS.png"
                      alt="Express.JS"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">Express.JS</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/django.svg"
                      alt="Django"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">Django</div>
                  </div>
                  <div className="marquee-item">
                    <Image
                      src="/assets/skills-logos/c++.png"
                      alt="C++"
                      width={30}
                      height={30}
                      className="skill-icon"
                    />
                    <div className="skill-name">C++</div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="gradient-overlay"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
