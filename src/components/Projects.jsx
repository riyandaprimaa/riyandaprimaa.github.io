import { useState } from 'react';
import { ExternalLink, Lock, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import ScrollReveal from './ScrollReveal';
import { projects } from '../data/portfolio';
import './Projects.css';

function ImageGallery({ images, onImageClick, onCardClick }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;

  const prev = (e) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };

  const handleImgClick = (e) => {
    e.stopPropagation();
    if (onImageClick) {
      onImageClick(images[idx]);
    } else if (onCardClick) {
      onCardClick();
    }
  };

  return (
    <div className="gallery" onClick={handleImgClick}>
      <img src={images[idx].src} alt={images[idx].alt} className="gallery-img" />
      <div className="gallery-zoom-hint">
        <Maximize2 size={16} />
        <span>Click for Fullview</span>
      </div>
      {images.length > 1 && (
        <>
          <button className="gallery-btn gallery-btn-prev" onClick={prev} aria-label="Previous image">
            <ChevronLeft size={16} />
          </button>
          <button className="gallery-btn gallery-btn-next" onClick={next} aria-label="Next image">
            <ChevronRight size={16} />
          </button>
          <div className="gallery-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`gallery-dot${i === idx ? ' active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIdx(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ConfidentialPanel({ pipelines, onCardClick }) {
  return (
    <div className="confidential-panel" onClick={onCardClick}>
      <div className="confidential-badge">
        <Lock size={14} />
        <span>Confidential Enterprise Architecture</span>
      </div>
      {pipelines && pipelines.length > 0 && (
        <div className="pipeline-flow">
          {pipelines[0].steps.slice(0, 5).map((step, i) => (
            <div key={i} className="pipeline-step-wrap">
              <div className="pipeline-step">
                <div className="pipeline-step-name">{step.step}</div>
                <div className="pipeline-step-desc">{step.desc}</div>
              </div>
              {i < Math.min(pipelines[0].steps.length, 5) - 1 && <div className="pipeline-arrow">→</div>}
            </div>
          ))}
          <span className="pipeline-more">+ Details</span>
        </div>
      )}
    </div>
  );
}

export default function Projects({ onSelectProject, onImageClick }) {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my recent AI, machine learning, and data engineering projects. Click any project to open detailed architecture & code links.
          </p>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={Math.min((i % 2) + 1, 3)} className="project-card glass-card">
              {/* Visual area */}
              {p.confidential ? (
                <ConfidentialPanel pipelines={p.pipelines} onCardClick={() => onSelectProject && onSelectProject(p)} />
              ) : (
                <ImageGallery
                  images={p.images}
                  onImageClick={onImageClick}
                  onCardClick={() => onSelectProject && onSelectProject(p)}
                />
              )}

              {/* Content */}
              <div className="project-content" onClick={() => onSelectProject && onSelectProject(p)}>
                <div className="project-header">
                  <span className="project-year">{p.year}</span>
                  <h3 className="project-title">{p.title}</h3>
                </div>
                <p className="project-desc">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                      <GithubIcon size={14} /> Code
                    </a>
                  )}

                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="project-link project-link-demo">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}

                  <button className="project-link project-link-details" onClick={() => onSelectProject && onSelectProject(p)}>
                    <Maximize2 size={14} /> Details
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
