import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          Riyan
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Riyanda Prima Anugerah — Built with React & ☕
        </p>
        <div className="footer-socials">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={17} /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
