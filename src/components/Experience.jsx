import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { experience } from '../data/portfolio';
import './Experience.css';

function ExperienceGallery({ images, onImageClick }) {
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

  return (
    <div className="exp-gallery-wrap">
      <div
        className="exp-gallery-main"
        onClick={() => onImageClick && onImageClick(images[idx])}
        title="Click to view full uncropped image"
      >
        <img src={images[idx].src} alt={images[idx].alt} className="exp-gallery-img" />
        <div className="exp-gallery-hint">
          <Maximize2 size={14} />
          <span>Fullview</span>
        </div>
        {images.length > 1 && (
          <>
            <button className="exp-nav-btn prev" onClick={prev} aria-label="Previous image">
              <ChevronLeft size={14} />
            </button>
            <button className="exp-nav-btn next" onClick={next} aria-label="Next image">
              <ChevronRight size={14} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="exp-thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={`exp-thumb ${i === idx ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience({ onImageClick }) {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Career</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey in AI, data, and software engineering.</p>
        </ScrollReveal>

        <div className="timeline">
          {experience.map((exp, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 4)} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
                {i < experience.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                {/* Experience Photo Gallery */}
                {exp.images && exp.images.length > 0 && (
                  <ExperienceGallery images={exp.images} onImageClick={onImageClick} />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
