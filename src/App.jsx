import ContentCard from './components/ContentCard';
import Profile from './components/profile/Profile';
import Navbar from './components/partials/Navbar';
import Squares from './components/etc/Squares';

import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <>
      <main className="container">
        <div className="main">
          <Profile />
          <ContentCard activeTab={activeTab} />
        </div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
      <Squares />
    </>
  );
}
