import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { education, awards, certifications } from '../data/portfolio';
import './Education.css';

function PhotoCarousel({ images, onImageClick }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div className="edu-carousel">
      <img
        src={images[idx].src}
        alt={images[idx].alt}
        className="edu-carousel-img"
        onClick={() => onImageClick && onImageClick(images[idx])}
        style={{ cursor: 'pointer' }}
        title="Click to view full image"
      />
      {images.length > 1 && (
        <div className="edu-carousel-controls">
          <button onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}><ChevronLeft size={14} /></button>
          <span>{idx + 1} / {images.length}</span>
          <button onClick={() => setIdx(i => (i + 1) % images.length)}><ChevronRight size={14} /></button>
        </div>
      )}
    </div>
  );
}

export default function Education({ onImageClick }) {
  return (
    <section id="education" className="section education-section">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Background</span>
          <h2 className="section-title">Education & Awards</h2>
        </ScrollReveal>

        <div className="edu-layout">
          {/* Education */}
          <div className="edu-cards">
            {education.map((edu, i) => (
              <ScrollReveal key={i} delay={i + 1} className="edu-card glass-card">
                <div className="edu-card-top">
                  <span className="edu-flag">{edu.flag}</span>
                  <div className="edu-card-info">
                    {edu.badge && <span className="edu-badge">{edu.badge}</span>}
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                    <div className="edu-meta-row">
                      <span className="edu-period">{edu.period}</span>
                      <span className="edu-gpa">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
                {edu.images && <PhotoCarousel images={edu.images} onImageClick={onImageClick} />}
              </ScrollReveal>
            ))}
          </div>

          {/* Awards + Certs */}
          <div className="edu-sidebar">
            <ScrollReveal delay={1}>
              <h3 className="edu-sidebar-title">Awards</h3>
              <div className="awards-list">
                {awards.map((a, i) => (
                  <div key={i} className="award-item glass-card">
                    <span className="award-icon">{a.icon}</span>
                    <div>
                      <p className="award-title">{a.title}</p>
                      <p className="award-desc">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <h3 className="edu-sidebar-title">Certifications</h3>
              <ul className="certs-list">
                {certifications.map((c, i) => (
                  <li key={i} className="cert-item">
                    <span className="cert-check">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
