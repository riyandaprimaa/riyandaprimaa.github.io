import ScrollReveal from './ScrollReveal';
import { personal, stats } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal delay={1} className="about-text-col">
            <p className="about-summary">{personal.summary}</p>
            <p className="about-location">
              <span className="location-dot" />
              {personal.location}
            </p>
          </ScrollReveal>

          <div className="about-stats-col">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i + 1} className="stat-card glass-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
