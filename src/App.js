import './App.css';
import OurHero from './components/OurHero';
import React from 'react';
import OurNavbar from './components/OurNavbar';

function App() {
  return (
    <div className="App">
      <OurNavbar />
      <OurHero />
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Keeton, Steve, and Nick</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
