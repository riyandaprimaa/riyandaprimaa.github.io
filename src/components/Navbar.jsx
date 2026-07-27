import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map(l => document.querySelector(l.href));
      sections.forEach((sec, i) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) setActive(NAV_LINKS[i].href);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          Riyan
          <span className="logo-bracket">/&gt;</span>
        </a>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="navbar-menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
