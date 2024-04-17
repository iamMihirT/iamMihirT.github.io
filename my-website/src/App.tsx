import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
// Import your global styles if you have any
// import './globalStyles.ts'; 

function App() {
  return (
    <div className="App">
      <HeroSection />
      {/* If you have other sections, include them here */}
    </div>
  );
}

export default App;
