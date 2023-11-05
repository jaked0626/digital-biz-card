import CV from '../assets/samplecv.pdf'

export default function DownloadButton () {
    return(
        <a href={CV} download="jakeunderlandcv" target='_blank' rel="noreferrer">
            <button >Download CSVc</button>
        </a>
    );
}