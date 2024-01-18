export default function DownloadButton() {
  // supplying up to date resume directly sourced from github
  return (
    <a
      href="https://raw.githubusercontent.com/jaked0626/cv/main/jakeunderland_resume.pdf"
      className="profile__button-link"
      download="jakeunderlandcv"
      target="_blank"
      rel="noreferrer"
    >
      <button className="profile__button">Download CSV</button>
    </a>
  );
}
