import ScrollReveal from './ScrollReveal';
import { interests, intellectualInterests } from '../data/portfolio';
import './Interests.css';

export default function Interests() {
  return (
    <section id="interests" className="section interests-section">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Beyond Work</span>
          <h2 className="section-title">Interests & Hobbies</h2>
          <p className="section-subtitle">What keeps me curious and energized outside the terminal.</p>
        </ScrollReveal>

        <div className="interests-layout">
          <ScrollReveal delay={1} className="interests-col">
            <h3 className="interests-col-title">🎯 Hobbies</h3>
            <div className="interests-grid">
              {interests.map(item => (
                <div key={item.label} className="interest-card glass-card">
                  <span className="interest-icon">{item.icon}</span>
                  <span className="interest-label">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2} className="interests-col">
            <h3 className="interests-col-title">💡 Intellectual Interests</h3>
            <div className="interests-grid">
              {intellectualInterests.map(item => (
                <div key={item.label} className="interest-card glass-card interest-card-purple">
                  <span className="interest-icon">{item.icon}</span>
                  <span className="interest-label">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
