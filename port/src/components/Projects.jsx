import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management application with collaboration features',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      icon: '✓',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Beautiful weather application using OpenWeather API with geolocation',
      tags: ['React', 'API', 'Geolocation'],
      icon: '🌤️',
      link: '#'
    },
    {
      id: 4,
      title: 'Encrypted Trie Autocomplete System',
      description: 'A privacy-focused autocomplete system using Trie data structure with RSA encryption. Stores encrypted words while maintaining fast prefix matching capabilities.',
      tags: ['DSA', 'Trie', 'RSA Encryption', 'Python'],
      icon: '🔐',
      link: 'https://github.com/Rishiikesh-20/DSA_Project'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.icon}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
