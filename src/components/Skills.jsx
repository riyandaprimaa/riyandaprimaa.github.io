import { Brain, Database, Code2, BarChart3 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { skills } from '../data/portfolio';
import './Skills.css';

const ICONS = { Brain, Database, Code2, BarChart3 };

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <ScrollReveal>
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">Technologies I work with across the full AI & data engineering stack.</p>
        </ScrollReveal>

        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <ScrollReveal key={group.category} delay={i + 1} className="skill-group glass-card">
                <div className="skill-group-header">
                  {Icon && <Icon size={18} className="skill-icon" />}
                  <h3 className="skill-group-title">{group.category}</h3>
                </div>
                <div className="skill-tags">
                  {group.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
