import PropTypes from 'prop-types';

export default function Navbar({ setActiveTab }) {
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => setActiveTab('Home')}>Home</button>
                </li>
                <li>
                    <button onClick={() => setActiveTab('Info')}>Info</button>
                </li>
                <li>
                    <button onClick={() => setActiveTab('History')}>History</button>
                </li>
                <li>
                    Mail
                </li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    setActiveTab: PropTypes.func.isRequired,
};