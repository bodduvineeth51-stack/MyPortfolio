import "./index.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      {/* 🔥 HEADING (MATCHES ABOUT SECTION) */}
      <h1 className="contact-heading">
        Let’s <span>Connect</span>
      </h1>

      {/* 🧠 INTRO */}
      <p className="contact-intro">
        I’m always open to discussing new ideas, collaborations, or opportunities.
      </p>

      {/* 📩 INFO */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone />
          <span>9550048902</span>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <span>bodduvineeth51@gmail.com</span>
        </div>
      </div>

      {/* 🔗 SOCIAL */}
      <div className="social-links">
        <a href="https://github.com/bodduvineeth51-stack" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/vineeth-boddu-44ba1436b/" target="_blank">
          <FaLinkedin />
        </a>
      </div>

    </section>
  );
};

export default Contact;