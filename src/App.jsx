import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import CyberGlowCursor from './components/CyberGlowCursor';
import ParticleCanvas from './components/ParticleCanvas';

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenImage = (img) => {
    setLightboxImage(img);
  };

  const handleCloseImage = () => {
    setLightboxImage(null);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="app">
      <ParticleCanvas />
      <CyberGlowCursor />
      <Navbar />
      <main>
        <Hero onImageClick={handleOpenImage} />
        <div className="glow-divider" />
        <About />
        <div className="glow-divider" />
        <Skills />
        <div className="glow-divider" />
        <Projects onSelectProject={handleSelectProject} onImageClick={handleOpenImage} />
        <div className="glow-divider" />
        <Experience onImageClick={handleOpenImage} />
        <div className="glow-divider" />
        <Education onImageClick={handleOpenImage} />
        <div className="glow-divider" />
        <Interests />
        <div className="glow-divider" />
        <Contact />
      </main>
      <Footer />

      {/* Modals */}
      <LightboxModal
        isOpen={Boolean(lightboxImage)}
        image={lightboxImage}
        onClose={handleCloseImage}
      />

      <ProjectDetailModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={handleCloseProject}
        onImageClick={handleOpenImage}
      />
    </div>
  );
}
