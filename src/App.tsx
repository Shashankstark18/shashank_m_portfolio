import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HeroSection       from './sections/HeroSection';
import AboutSection      from './sections/AboutSection';
import SkillsSection     from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection   from './sections/ProjectsSection';
import SystemsSection    from './sections/SystemsSection';
import EducationSection  from './sections/EducationSection';
import ContactSection    from './sections/ContactSection';

function App() {
  return (
    <>
      {/* Persistent background */}
      <StarField />

      {/* Page layout */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <SystemsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
