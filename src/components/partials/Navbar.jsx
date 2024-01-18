import PropTypes from 'prop-types';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="nav__container">
      <ul>
        <li>
          <button onClick={() => setActiveTab('Home')}
          className={activeTab === 'Home' ? 'nav__tab--active' : ''}>
            <i className="fas fa-home"></i>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('History')}
          className={activeTab === 'History' ? 'nav__tab--active' : ''}>
            <i className="fas fa-history"></i>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('Info')}
          className={activeTab === 'Info' ? 'nav__tab--active' : ''}>
            {/* <i className="fas fa-info-circle"></i> */}
            <i className="fa-solid fa-folder"></i>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('Mail')}
          className={activeTab === 'Mail' ? 'nav__tab--active' : ''}>
            <i className="fas fa-envelope"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};
