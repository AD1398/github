import React from 'react';

export default function About() {
  const skills = [
    'React',
    'JavaScript',
    'Vite',
    'CSS3',
    'HTML5',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'Responsive Design',
    'Web Performance',
    'UI/UX Design'
  ];

  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate full-stack developer with a keen eye for creating beautiful,
              functional, and user-friendly web applications. With expertise in modern JavaScript
              frameworks and a strong foundation in web technologies, I transform ideas into
              compelling digital experiences.
            </p>
            <p>
              I love working on projects that challenge me to learn and grow. My approach combines
              technical excellence with creative problem-solving to deliver solutions that exceed
              expectations.
            </p>
            <div className="skills">
              <h4>Technical Skills</h4>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-image">👨‍💻</div>
        </div>
      </div>
    </section>
  );
}
