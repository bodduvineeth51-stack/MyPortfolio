import "./index.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      
      {/* TOP TEXT */}
      <div className="about-top">
        <h1>
          Who <span>Am I?</span>
        </h1>

        <p>
          I’m Vineeth — an AI & Data Science student who builds real-world tech solutions.
          I focus on learning, creating, and improving through projects in AI and web development.
        </p>
      </div>

      {/* CARDS */}
      <div className="about-cards">

        {/* CARD 1 */}
        <div className="card card-education">
          <h2>Education</h2>
         <ul className="skills-list">
            <li>Pursuing B.Tech in AI & Data Science at NxtWave Institute of Technology..</li>
         
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="card card-skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Mastered HTML & CSS to build clean and responsive interfaces.</li>
            <li>Strong foundation in JavaScript for creating dynamic user experiences.</li>
            <li>Building modern web applications using React.</li>
            <li>Problem-solving and scripting with Python.</li>
            <li>Database handling and queries using SQL.</li>
            <li>Building LLM (AI) applications.</li>
            <li>Working with MongoDB for modern database solutions.</li>
            <li>Mastering Data Structures & Algorithms using C++.</li>
        </ul>
        </div>

        {/* CARD 3 */}
        <div className="card card-freelance">
          <h2>Freelancing</h2>
          <ul className="skills-list">
            <li>I create dynamic and modern websites for clients, focusing on performance, responsiveness, and clean design.</li>
         
          </ul>
        </div>

      </div>

    </section>
  );
};

export default About;