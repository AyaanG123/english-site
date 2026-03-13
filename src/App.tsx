import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Characters from './components/Characters';
import Themes from './components/Themes';
import Adaptation from './components/Adaptation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {activeSection === 'home' && <Home />}
        {activeSection === 'characters' && <Characters />}
        {activeSection === 'themes' && <Themes />}
        {activeSection === 'adaptation' && <Adaptation />}
      </main>
      <footer className="footer">
        <p>&copy; Ayaan Gill</p>
      </footer>
    </div>
  );
}

export default App;
