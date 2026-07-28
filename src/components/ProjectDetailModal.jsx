import { useEffect, useState } from 'react';
import { X, ExternalLink, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectDetailModal.css';

export default function ProjectDetailModal({ isOpen, project, onClose, onImageClick }) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const images = project.images || [];

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIdx((i) => (i - 1 + images.length) % images.length);
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setImgIdx((i) => (i + 1) % images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Media Preview Area */}
        {images.length > 0 ? (
          <div className="modal-media" onClick={() => onImageClick && onImageClick(images[imgIdx])}>
            <img src={images[imgIdx].src} alt={images[imgIdx].alt} className="modal-img" />
            <div className="modal-img-overlay">
              <span>Click to view full uncropped image</span>
            </div>
            {images.length > 1 && (
              <>
                <button className="modal-nav-btn prev" onClick={prevImg}>
                  <ChevronLeft size={18} />
                </button>
                <button className="modal-nav-btn next" onClick={nextImg}>
                  <ChevronRight size={18} />
                </button>
                <div className="modal-dots">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`modal-dot ${i === imgIdx ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgIdx(i);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : project.confidential ? (
          <div className="modal-confidential-header">
            <div className="confidential-badge">
              <Lock size={14} />
              <span>Confidential Enterprise System</span>
            </div>
            <h4>Enterprise Architecture Overview</h4>
          </div>
        ) : null}

        {/* Modal Body */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>

          <div className="modal-tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="modal-section">
            <h3 className="modal-section-heading">OVERVIEW</h3>
            <p className="modal-overview-text">{project.longDescription || project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="modal-highlights">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Special MTA Flow Diagram in Modal if Confidential */}
          {project.confidential && project.pipelines && (
            <div className="modal-mta-pipelines">
              <h3 className="modal-section-heading">ENTERPRISE SYSTEM FLOWS</h3>
              {project.pipelines.map((pipe, pIdx) => (
                <div key={pIdx} className="mta-pipeline-box">
                  <h4 className="mta-pipeline-title">{pipe.name}</h4>
                  <p className="mta-pipeline-sub">{pipe.desc}</p>
                  <div className="mta-flow-steps">
                    {pipe.steps.map((s, sIdx) => (
                      <div key={sIdx} className="mta-flow-step-wrap">
                        <div className="mta-flow-step">
                          <span className="step-name">{s.step}</span>
                          <span className="step-desc">{s.desc}</span>
                        </div>
                        {sIdx < pipe.steps.length - 1 && <span className="mta-flow-arrow">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons Footer */}
          <div className="modal-actions">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="modal-btn modal-btn-secondary">
                <GithubIcon size={16} />
                View Sources
              </a>
            ) : (
              <span className="modal-btn modal-btn-disabled">
                <Lock size={15} />
                Confidential / Internal
              </span>
            )}

            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="modal-btn modal-btn-primary">
                <ExternalLink size={16} />
                Full Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
