interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'characters', label: 'Characters' },
    { id: 'themes', label: 'Themes' },
    { id: 'singapore', label: 'Singapore' },
    { id: 'adaptation', label: 'Film Adaptation' },
    { id: 'sources', label: 'Sources' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="site-title">Crazy Rich Asians</h1>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
