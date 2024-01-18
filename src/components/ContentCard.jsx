import PropTypes from 'prop-types';
import Home from './home/Home';
import Info from './Info';
import History from './history/History';

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
