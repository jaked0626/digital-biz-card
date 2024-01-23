import PropTypes from 'prop-types';

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

export default function SkillGrid() {
  let skillGrid = [];
  const skills = [
    {
      icon: 'fa-solid fa-server',
      title: 'Backend Engineering',
      description:
        'Experiences in optimization algorithms, data pipelines, and EC backend APIs. Loves Golang and Python, tolerates C++.',
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Product Management',
      description:
        'Data-centric approach to product management by defining critical user journeys and implementing metrics feedback cyles.',
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Bilingual',
      description:
        'Fluent in both Japanese and English to the level of navigating highly technical topics and documents.',
    },
    {
      icon: 'fa-solid fa-face-laugh-beam',
      title: 'People Person',
      description:
        'Excellent communicator with lots of experience in managing small to midsized teams.',
    },
  ];

  for (let skill of skills) {
    skillGrid.push(<SkillBox key={skill.title} {...skill} />);
  }
  return (
    <>
      <h1 className="title">
        What <span className="title--accent">I Do</span>
      </h1>
      <div className="home__skills">{skillGrid}</div>
    </>
  );
}
