import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ScrollReveal from './ScrollReveal';
import { personal } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm always open to exciting AI projects, collaborations, or just a good conversation about tech and data.
          </p>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal delay={1} className="contact-card glass-card">
            <a href={`mailto:${personal.email}`} className="contact-link">
              <div className="contact-link-icon email-icon">
                <Mail size={24} />
              </div>
              <div>
                <p className="contact-link-label">Email</p>
                <p className="contact-link-value">{personal.email}</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={2} className="contact-card glass-card">
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon linkedin-icon">
                <LinkedinIcon size={24} />
              </div>
              <div>
                <p className="contact-link-label">LinkedIn</p>
                <p className="contact-link-value">riyanda-prima-anugerah</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={3} className="contact-card glass-card">
            <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon github-icon">
                <GithubIcon size={24} />
              </div>
              <div>
                <p className="contact-link-label">GitHub</p>
                <p className="contact-link-value">riyandaprimaa</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={4} className="contact-card glass-card">
            <div className="contact-link">
              <div className="contact-link-icon location-icon">
                <MapPin size={24} />
              </div>
              <div>
                <p className="contact-link-label">Location</p>
                <p className="contact-link-value">{personal.location}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <div className="contact-cta">
            <a href={`mailto:${personal.email}`} className="btn-primary contact-cta-btn">
              <Mail size={18} />
              Say Hello
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
