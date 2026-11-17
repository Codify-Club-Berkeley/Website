import React, { useEffect, useId, useRef, useState } from "react";
import type { Project } from "../data/projectsData";
import { technologyLogos } from "../data/technologyLogos";

type ProjectCoinProps = {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
};

const ProjectCoin = ({ project, expanded, onToggle }: ProjectCoinProps) => {
  const pathId = `coin-path-${useId().replace(/:/g, "")}`;
  const frontRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const readingRef = useRef<HTMLDivElement>(null);
  const wasExpanded = useRef(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  const sizeLogo = (image: HTMLImageElement | null) => {
    if (!image?.naturalWidth || !image.naturalHeight) return;
    const ratio = image.naturalWidth / image.naturalHeight;
    image.dataset.shape = ratio > 2.2 ? "wide" : ratio > 1.25 ? "landscape" : "square";
  };

  useEffect(() => {
    if (!expanded) return;
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content) return;

    const updateProgress = () => {
      const distance = details.scrollHeight - details.clientHeight;
      setCanScroll(distance > 1);
      const progress = distance > 0 ? Math.min(1, Math.max(0, details.scrollTop / distance)) : 0;
      readingRef.current?.setAttribute("data-reading-step", String(Math.min(2, Math.floor(progress * 3))));
    };

    details.scrollTop = 0;
    const observer = new ResizeObserver(updateProgress);
    observer.observe(details);
    observer.observe(content);
    details.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      details.removeEventListener("scroll", updateProgress);
    };
  }, [expanded]);

  useEffect(() => {
    if (expanded !== wasExpanded.current) {
      if (expanded) {
        backRef.current?.focus({ preventScroll: true });
      }
      else if (document.activeElement && backRef.current?.closest("article")?.contains(document.activeElement)) {
        frontRef.current?.focus({ preventScroll: true });
      }
      wasExpanded.current = expanded;
    }
  }, [expanded]);

  useEffect(() => {
    if (!expanded) return;
    const closeOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Let another coin handle its own click rather than toggling twice.
      if (!articleRef.current?.contains(target) && !target.closest(".project-coin-item")) {
        onToggle();
      }
    };
    document.addEventListener("click", closeOutside);
    return () => document.removeEventListener("click", closeOutside);
  }, [expanded, onToggle]);

  const ringFontSize = Math.min(17, 480 / Math.max(project.projectTitle.length, 1));

  return (
    <article
      ref={articleRef}
      className={`project-coin-item${expanded ? " is-expanded" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && expanded) {
          event.stopPropagation();
          onToggle();
        }
      }}
    >
      <div className="project-coin" onClick={(event) => {
        if (event.target === event.currentTarget) onToggle();
      }}>
        <div className="project-coin-center">
          <button
            ref={frontRef}
            type="button"
            className="project-coin-face project-coin-front"
            onClick={onToggle}
            aria-label={`Explore ${project.projectTitle}`}
            aria-expanded={expanded}
            aria-hidden={expanded}
            tabIndex={expanded ? -1 : 0}
          >
            <div className="project-coin-logo">
              {imageFailed ? (
                <span className="project-coin-logo-fallback">{project.projectTitle}</span>
              ) : (
                <img
                  ref={sizeLogo}
                  src={project.imgSource}
                  alt={project.projectTitle}
                  onLoad={(event) => sizeLogo(event.currentTarget)}
                  onError={() => setImageFailed(true)}
                />
              )}
            </div>
            <span className="project-coin-front-hint">Click to explore <span aria-hidden="true">↗</span></span>
          </button>

          <div className="project-coin-face project-coin-back" aria-hidden={!expanded}>
            <div ref={readingRef} className="project-coin-reading">
              {canScroll && expanded && (
                <div className="project-coin-reading-progress" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            <div ref={detailsRef} className="project-coin-details" tabIndex={expanded ? 0 : -1} role="region" aria-label={`${project.projectTitle} details`}>
              <div ref={contentRef} className="project-coin-details-content">
              <h3>{project.projectTitle}</h3>
              <h4>About the client</h4>
              <p>{project.aboutClient}</p>
              <h4>Our project</h4>
              <p>{project.aboutProject}</p>
              {project.technologies.length > 0 && (
                <ul className="project-coin-technologies" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <img src={technologyLogos[technology]} alt="" />
                      {technology}
                    </li>
                  ))}
                </ul>
              )}
              <div className="project-coin-links">
                {project.linkIcons.map((label, index) => (
                  <a key={`${label}-${index}`} href={project.linkDestinations[index]} target="_blank" rel="noopener noreferrer" tabIndex={expanded ? 0 : -1}>
                    {label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>

              </div>
            </div>
            </div>
            <button ref={backRef} type="button" className="project-coin-close" aria-hidden={!expanded} onClick={onToggle} tabIndex={expanded ? 0 : -1}>
              <span aria-hidden="true">↶</span> Flip back
            </button>
          </div>
        </div>



        <div className="project-coin-ring-turn" style={{ transform: `rotate(${expanded ? 360 : 0}deg)` }} aria-hidden="true">
          <svg className="project-coin-ring" viewBox="0 0 300 300">
            <defs>
              <path id={pathId} d="M150,150 m135,0 a135,135 0 1,1 -270,0 a135,135 0 1,1 270,0" />
            </defs>
            <text fontSize={ringFontSize} dominantBaseline="central">
              <textPath href={`#${pathId}`} startOffset="25%" textAnchor="middle">{project.projectTitle}</textPath>
              <textPath href={`#${pathId}`} startOffset="75%" textAnchor="middle">{project.projectTitle}</textPath>
            </text>
          </svg>
        </div>
      </div>

    </article>
  );
};

export default ProjectCoin;
