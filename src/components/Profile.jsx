import DownloadButton from './profile_components/DownloadButton';
import Socials from './profile_components/Socials';

export default function Profile() {
  const base = import.meta.env.BASE_URL;
  const profile = 'smileprofilepixel.png';
  const imagePath = `${base}${profile}`;

  return (
    <div className="profile">
      <img src={imagePath} alt="profile photo" className="profile__photo" />
      <h1 className="profile__name">Jake Underland</h1>
      <h2 className="profile__title">&#123;PdM/Engineer&#125;</h2>
      <Socials />
      <DownloadButton />
    </div>
  );
}
