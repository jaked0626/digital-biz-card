import DownloadButton from "./DownloadButton";
import Socials from './Socials';

export default function Profile() {
    const base = import.meta.env.BASE_URL;
    const imagePath = `${base}profile.JPG`;

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