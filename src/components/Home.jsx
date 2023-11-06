export default function Home () {
  return(
    <div className="home">
    {/* <div className="home__section"> */}
      <h1 className="home__title">
        About <span className="home__title--green">Me</span>
      </h1>
      <p className="home__text">
        Hi! I&#39;m Jake, a backend engineer and product manager in the making! 
        I started my journey in tech studying statistics and data science in college, 
        and my current primary interests are graph algorithms, distributed systems, 
        and product creation/management.
      </p>
    {/* </div> */}
    {/* <div className="home__section"> */}
      <h1 className="home__title">
        Some <span className="home__title--green">Facts</span>
      </h1>
      <ul className="home__list">
        <li>
          I&#39;ve worked as an econometrics RA in Chicago and Tokyo. 
        </li>
        <li>
          I am a proud dog daddy. 
        </li>
        <li>
          My project Carbon Calculator won a Google software contest in undergrad. 
        </li>
        <li>
          My first computer program was an automated COVID vaccine reservation getter. 
          I used this to help younger, busy people in Japan get vaccine reservations and campaigned for higher vaccination rates. 
        </li>
      </ul>
    </div>
    // </div>
  );
}