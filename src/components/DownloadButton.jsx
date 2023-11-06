import CV from '../assets/jakeunderland_resume.pdf'

export default function DownloadButton() {
    // or, I could supply the github url for my up to date resume. 
    // https://raw.githubusercontent.com/jaked0626/cv/57b3a7b647f30c019bdb8d02bb2df5a5483ce9d3/jakeunderland_resume.pdf
    return(
        <a href={CV} download="jakeunderlandcv" target='_blank' rel="noreferrer">
          <button className="profile__button">Download CSV</button>
        </a>
    );
}