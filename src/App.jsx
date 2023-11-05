import ContentCard from './components/ContentCard';
import ProfileCard from './components/ProfileCard';
import Navbar from './components/Navbar';

import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <Navbar setActiveTab={setActiveTab}/>
      <ProfileCard />
      <ContentCard activeTab={activeTab}/>
    </>
  )
}
