
function AboutMe() {
  return(
    <div className="home__aboutme">
      <DescriptionText />
      <Facts />
    </div>
  )
}

function DescriptionText() {
  return(
    <div className="home__aboutme--description home__text">
      <p>
        I&#39;m Jake, a backend engineer and product manager in the making :)
        </p>
<p>
        {/* My primary interest in life has always been the study of humans, what drives them, and how 
        these drives shape society. Product managment is the practice of identifying such drives
        and aiding in their realization through technical innovation. 
        My focus in life has always been social sciences; the study of what drives human 
        activity and how it shapes society. Product management is the practice of identifying said 
        motives and Coming from a social sciences background, my primary interest is in
        understanding what drives people, the motives which shape our society. 
        Product creation and management, to me, is the practice of identifying said motives 
        and   */}
        I&#39;ve long been interested in what drives human activity. I guess it&#39;s 
        natural that I went from studying social sciences in undergrad to product management in my career;
        product management is the practice of identifying and aiding the fruition of human motivations, after all! 
</p>
<p>
        Outside of work, I am a proud dog daddy and a reader of existentialist literature. 
      </p>
    </div>
  )
}

function Facts() {
  // get age 
  const now = new Date();
  const birthday = new Date(2000, 5, 26); // months are 0 indexed, stupidly
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; 
  const age = Math.floor( (now - birthday) / millisecondsInYear );

  // TODO: move to metadata 
  let factsDic = {
    "Age": age,
    "Pronouns": "any :)",
    "Residence": "Tokyo, Japan",
    "Email": "jakez0626@gmail.com",
    "Phone": "09014618440",
  };
  
  let factsList = [];
  for (const [factKey, factVal] of Object.entries(factsDic)) {
    factsList.push(
      <li>
        <span className="home__text--accent">{factKey}:</span>
        {factVal}
      </li>
    )
    console.log(factsList);
  }

  return (
    <div className="home__aboutme--facts home__text">
      <ul>
        {factsList}
      </ul>
    </div>
  )
}

export default function Home() {
  return(
    <div className="home">
    {/* <div className="home__section"> */}
      <h1 className="home__title">
        {/* Hello World, */}
        Hello <span className="home__title--accent">World!</span>
      </h1>

      <AboutMe />

      <h1 className="home__title">
        {/* Some Facts */}
        Some <span className="home__title--accent">Facts</span>
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