import PropTypes from 'prop-types';

export default function Navbar({ setActiveTab }) {
  return (
    <nav className="nav__container">
      <ul>
        <li>
          <button onClick={() => setActiveTab('Home')}>
            <i className="fas fa-home"></i>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('Info')}>
            <i className="fas fa-info-circle"></i>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('History')}>
            <i className="fas fa-history"></i>
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('Mail')}>
            <i className="fas fa-envelope"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};