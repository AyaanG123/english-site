import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Characters from './components/Characters';
import Themes from './components/Themes';
import Singapore from './components/Singapore';
import Adaptation from './components/Adaptation';
import Sources from './components/Sources';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {activeSection === 'home' && <Home />}
        {activeSection === 'characters' && <Characters />}
        {activeSection === 'themes' && <Themes />}
        {activeSection === 'singapore' && <Singapore />}
        {activeSection === 'adaptation' && <Adaptation />}
        {activeSection === 'sources' && <Sources />}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Crazy Rich Asians Fan Site. An educational resource for book enthusiasts.</p>
      </footer>
    </div>
  );
}

export default App;
