import React, { useEffect, useRef, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./MemberCard.css";

interface MemberCardProps {
  imagePath: string;
  name: string;
  title: string;
  url?: string | null;
  backContent?: string | null;
}

const MemberCard: React.FC<MemberCardProps> = ({ imagePath, name, title, url, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const hasInteracted = useRef(false);
  const bioRef = useRef<HTMLDivElement>(null);
  const bioContentRef = useRef<HTMLDivElement>(null);
  const bioShellRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (!isFlipped) return;
    const bio = bioRef.current;
    const content = bioContentRef.current;
    if (!bio || !content) return;

    const updateProgress = () => {
      const distance = bio.scrollHeight - bio.clientHeight;
      setCanScroll(distance > 1);
      const progress = distance > 0 ? Math.max(0, Math.min(1, bio.scrollTop / distance)) : 0;
      bioShellRef.current?.setAttribute("data-step", String(Math.min(2, Math.floor(progress * 3))));
    };

    bio.scrollTop = 0;
    const observer = new ResizeObserver(updateProgress);
    observer.observe(bio);
    observer.observe(content);
    bio.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      bio.removeEventListener("scroll", updateProgress);
    };
  }, [isFlipped, backContent]);

  useEffect(() => {
    if (hasInteracted.current) {
      (isFlipped ? backRef : frontRef).current?.focus({ preventScroll: true });
    }
  }, [isFlipped]);

  const showBio = () => {
    hasInteracted.current = true;
    setIsFlipped(true);
  };

  const showPhoto = () => {
    setIsFlipped(false);
  };

  return (
    <article
      className={`member-card m-3${isFlipped ? " is-flipped" : ""}`}
      aria-label={name}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isFlipped) {
          event.stopPropagation();
          showPhoto();
        }
      }}
    >
      <div className="member-card-turner">
        <div className="member-card-face member-card-front bg-white rounded-md shadow-lg" aria-hidden={isFlipped}>
          <button
            ref={frontRef}
            type="button"
            className="member-card-open flex h-full w-full flex-col p-3 text-left rounded-md"
            aria-label={`About ${name}`}
            aria-expanded={isFlipped}
            tabIndex={isFlipped ? -1 : 0}
            onClick={showBio}
          >
            <img className="h-60 w-full shrink-0 rounded object-cover" src={imagePath} alt={name} />
            <span className="mt-3 block text-base font-semibold leading-tight text-black">{name}</span>
            <span className="mt-1 block text-xs text-gray-600">{title}</span>
            <span className="mt-auto block pt-2 text-xs text-navbar-purple">About me <span aria-hidden="true">↗</span></span>
          </button>
          {url && (
            <a className="member-card-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} tabIndex={isFlipped ? -1 : 0}>
              <LinkedInIcon fontSize="small" />
            </a>
          )}
        </div>

        <div className="member-card-face member-card-back flex flex-col rounded-md bg-white p-6 shadow-lg" aria-hidden={!isFlipped}>
          <div ref={bioShellRef} className="member-card-bio-shell">
          <div ref={bioRef} className="member-card-bio" role="region" aria-label={`${name} bio`} tabIndex={isFlipped && canScroll ? 0 : -1}>
            <div ref={bioContentRef}>
            <h3 className="mb-1 text-lg font-semibold leading-tight text-black">{name}</h3>
            <p className="mb-4 text-xs text-navbar-purple">{title}</p>
            <h4 className="mb-3 text-sm font-semibold text-black">About me</h4>
            <p className="mb-0 text-sm leading-relaxed text-gray-600">
              {backContent || "Bio coming soon"}
            </p>
            </div>
          </div>
          {canScroll && isFlipped && (
            <div className="member-card-scroll-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
          )}
          </div>
          <div className="mt-auto flex items-center justify-between gap-2 pt-5">
            <button ref={backRef} type="button" className="member-card-return text-xs text-navbar-purple" onClick={showPhoto} tabIndex={isFlipped ? 0 : -1}>
              <span aria-hidden="true">↶</span> Back to photo
            </button>
            {url && (
              <a className="member-card-back-link text-navbar-purple" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} tabIndex={isFlipped ? 0 : -1}>
                <LinkedInIcon fontSize="small" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MemberCard;
