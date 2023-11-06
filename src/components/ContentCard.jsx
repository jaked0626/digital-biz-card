import PropTypes from 'prop-types';
import Home from './Home';
import Info from './Info';
import History from './History';

export default function ContentCard({ activeTab }) {
    return (
        <div className="content">
            {activeTab === 'Home' && <Home />}
            {activeTab === 'Info' && <Info />}
            {activeTab === 'History' && <History />}
        </div>
    );
}

ContentCard.propTypes = {
    activeTab: PropTypes.string.isRequired,
};