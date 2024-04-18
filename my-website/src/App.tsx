// src/App.tsx or wherever your main layout is
import React from 'react';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import InterestsEducationSection from './components/InterestsEducationSection';
import ExperienceSection from './components/ExperienceSection';
import PublicationsSection from './components/PublicationsSection';
const App = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <InterestsEducationSection />
      <ExperienceSection/>
      <PublicationsSection/>
      {/* Add more sections or footer as needed */}
    </>
  );
};

export default App;
