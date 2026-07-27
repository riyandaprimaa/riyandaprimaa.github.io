import { useEffect, useState } from 'react';
import { Mail, Download, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/portfolio';
import './Hero.css';

const ROLES = personal.roles;

export default function Hero({ onImageClick }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((roleIndex + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-gradient" />

      <div className="hero-inner">
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring" />
          <img
            src="/images/profile.jpg"
            alt="Riyanda Prima Anugerah"
            className="hero-photo"
            onClick={() => onImageClick && onImageClick({ src: '/images/profile.jpg', alt: 'Riyanda Prima Anugerah' })}
            title="Click to view full uncropped photo"
          />
          <div className="hero-photo-glow" />
        </div>

        <div className="hero-content">
          <p className="hero-greeting">👋 Hi, I'm</p>
          <h1 className="hero-name">{personal.name}</h1>

          <div className="hero-role-wrap">
            <span className="hero-role-prefix">I'm an </span>
            <span className="hero-role-text">
              {displayed}
              <span className="hero-cursor">|</span>
            </span>
          </div>

          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <ChevronDown size={16} />
            </a>
            <a href="/resume.pdf" download className="btn-outline">
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${personal.email}`} className="social-btn" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <ChevronDown size={20} className="bounce" />
      </div>
    </section>
  );
}
