export default function DownloadButton() {
  // supplying up to date resume directly sourced from github
  return (
    <div className="profile__cv--container">
      <a
        href="https://raw.githubusercontent.com/jaked0626/cv/main/jakeunderland_resume.pdf"
        className="profile__cv--button-link"
        download="jakeunderlandcv"
        target="_blank"
        rel="noreferrer"
        title="Download PDF of Jake's CV"
      >
        <button className="profile__cv--button">Download CV</button>
      </a>
      <a
        href="https://github.com/jaked0626/cv/blob/main/jakeunderland_resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="profile__cv--link"
        title="Link to CV on Github"
      >
        Or, browse the CV on Github
      </a>
    </div>
  );
}
