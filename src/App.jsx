import ContentCard from './components/ContentCard';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <main className="container">
        <div className="main">
          <Profile />
          <ContentCard activeTab={activeTab}/>
        </div>
        <Navbar setActiveTab={setActiveTab}/>
      </main>
    </>
  )
}
