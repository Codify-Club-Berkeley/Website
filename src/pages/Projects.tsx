import * as React from "react";
import { useState } from "react";
import "./Projects.css";
import ProjectCoin from "../components/ProjectCoin";
import { allProjectsData } from "../data/projectsData";
import PageHeader from "../components/PageHeader";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const toggleProject = (title: string) => {
    setSelectedProject((selected) => selected === title ? null : title);
  };

  // Keep the current projects first without dividing them into separate sections.
  const projects = [
    ...allProjectsData.filter((project) => project.currentProject),
    ...allProjectsData.filter((project) => !project.currentProject),
  ];

  return (
    <div className="projects-page">
      <PageHeader
        title="Projects"
        body="Projects are Codify’s lifeblood. Each semester, we give members the
        opportunity to work on projects ranging from full stack mobile and web
        development to building machine learning models."
      />
      <section className="projects-support" aria-labelledby="projects-support-title">
        <h2 id="projects-support-title">Continued Support</h2>
        <p>We actively maintain all of our projects to ensure a product that people will continue to use for years to come. This not only ensures all of our hard work isn't for nothing, but it encourages writing maintainable code and minimizing technical debt. If you see a project here you would like to work on, you can.</p>
      </section>
      <hr className="projects-divider" />
      <section className="projects-gallery" aria-labelledby="projects-gallery-title">
        <div className="projects-gallery-heading">
          <h2 id="projects-gallery-title">Our <span>Projects</span></h2>
          <p className="projects-gallery-hint">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 8a8.5 8.5 0 0 0-14-2L3 9m0 0V4m0 5h5M4 16a8.5 8.5 0 0 0 14 2l3-3m0 0v5m0-5h-5" />
            </svg>
            <span><strong>Click a coin</strong> to explore the project.</span>
          </p>
        </div>
        <div className="projects-coin-grid">
          {projects.map((project) => (
            <ProjectCoin
              key={project.projectTitle}
              project={project}
              expanded={selectedProject === project.projectTitle}
              onToggle={() => toggleProject(project.projectTitle)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
