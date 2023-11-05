import PropTypes from 'prop-types';
import Home from './Home';
import Info from './Info';
import History from './History';

export default function ContentCard({ activeTab }) {
    return (
        <main>
            {activeTab === 'Home' && <Home />}
            {activeTab === 'Info' && <Info />}
            {activeTab === 'History' && <History />}
        </main>
    );
}

ContentCard.propTypes = {
    activeTab: PropTypes.string.isRequired,
};