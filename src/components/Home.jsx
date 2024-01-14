import PropTypes from 'prop-types';

function DescriptionText() {
  return(
    <div className="home__aboutme--description home__text">
      <p>
        I&#39;m Jake, a backend engineer and product manager in the making :)
      </p>
      <p>
        I&#39;ve long been interested in what drives human activity. That&#39;s why in school I studied social
        sciences and in my career I chose product management; a PM&#39;s job is to identify people&#39;s motivators and help them overcome 
        obstacles, after all!
      </p>
      <p>
        Outside of work, I am a proud dog daddy and a reader with a penchant for the Russians and Postmodernism. 
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
        <span className="home__text--accent">{factKey}: </span>
        {factVal}
      </li>
    )
  }

  return (
      <ul>
        {factsList}
      </ul>
  )
}

function AboutImage() {
  const base = import.meta.env.BASE_URL;
  const image = "brownie-fullbody-pixel.png";
  const imagePath = `${base}${image}`;
  return(
    <img src={imagePath} alt="my dog, brownie"/>
  )
}

function AboutMe() {
  return(
    <>
      <h1 className="home__title">
        Hello <span className="home__title--accent">World!</span>
      </h1>
      <div className="home__aboutme">
        <DescriptionText />
        <div className="home__aboutme--facts home__text">
          <Facts />
          <AboutImage /> 
        </div>
      </div>
    </>
  )
}

function SkillGrid() {
  let skillGrid = []
  const skills = [
    {
      icon: 'fa-solid fa-server',
      title: 'Backend Engineering',
      description: "Experiences in optimization algorithms, data pipelines, and EC backend APIs. Loves Golang and Python, tolerates C++.",
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Product Management',
      description: 'Data-centric approach to product management by defining critical user journeys and implementing metrics feedback cyles.',
    },
    {
      icon: "fa-solid fa-globe",
      title: 'Bilingual',
      description: 'Fluent in both Japanese and English to the level of navigating highly technical topics and documents.',
    },
    {
      icon: 'fa-solid fa-face-laugh-beam',
      title: 'People Person',
      description: 'Excellent communicator with lots of experience in managing small to midsized teams.',
    },
  ]

  for (let skill of skills) {
    skillGrid.push(
      <SkillBox key={skill.title} {...skill} />
    )
  }
  return(
    <>
      <h1 className="home__title">
        What <span className="home__title--accent">I Do</span>
      </h1>
      <div className="home__skills">
        {skillGrid}
      </div>
    </>
  )
}

function SkillBox({ icon, title, description }) {
  return (
      <div className="home__skills--box">
        <i className={icon} />
        <div className="home__subtitle">{title}</div>
        <div className="home__text">{description}</div>
      </div>
  );
}

SkillBox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function Home() {
  return(
    <div className="home">
      <AboutMe />
      <SkillGrid />
    </div>
  );
}