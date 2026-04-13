import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on click (mobile)
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Vineeth</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <span onClick={() => handleScroll("home")}>EntryPoint</span>
        <span onClick={() => handleScroll("about")}>WhoAmI</span>
        <span onClick={() => handleScroll("projects")}>My Works</span>
        <span onClick={() => handleScroll("contact")}>Let's Connect</span>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;