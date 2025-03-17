import React from "react";
import { PiMonitorArrowUpBold } from "react-icons/pi";
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
            <div className="marquee-content">
              <PiMonitorArrowUpBold className="marquee-icon" />
              <span className="marquee-text">FRONTEND DESIGN DEVELOPMENT</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
