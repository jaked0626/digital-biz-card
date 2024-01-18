import PropTypes from 'prop-types';
import Home from './home/Home';
import Info from './Info';
import History from './history/History';
import Contact from './contact/Contact';

export default function ContentCard({ activeTab }) {
  return (
    <div className="content">
      {activeTab === 'Home' && <Home />}
      {activeTab === 'Info' && <Info />}
      {activeTab === 'History' && <History />}
      {activeTab === 'Mail' && <Contact />}
    </div>
  );
}

ContentCard.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
