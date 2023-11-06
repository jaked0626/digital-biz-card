import DownloadButton from "./DownloadButton";

export default function Profile() {
    return (
        <div className="profile">
            <img src="/profile.JPG" alt="profile photo" className="profile__photo" />
            <h1 className="profile__name">Jake Underland</h1>
            <h2 className="profile__title">&#123;PdM/Engineer&#125;</h2>
            <DownloadButton />
        </div>
    );
}