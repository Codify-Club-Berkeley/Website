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
      <hr className="projects-divider" />
      <section className="projects-gallery" aria-labelledby="projects-gallery-title">
        <div className="projects-gallery-heading">
          <h2 id="projects-gallery-title">Our <span>Projects</span></h2>
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
