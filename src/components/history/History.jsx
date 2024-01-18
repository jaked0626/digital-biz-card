import PropTypes from "prop-types";

export default function History() {
  return(
    <div className="home">
      <Experience />
      <Education />
    </div>
  )
}

function Experience() {
  let jobsData = [
    {
      company: "Optimind Inc.",
      date: "2023-Now",
      role: 'Backend Engineer/PM',
      description: 'Implemented SLI metrics and DORA metrics. Marked 150% increase in features shipped. Cut 50% of cloud costs by migrating to serverless and moving archived logs.',
      skills: ['Python', 'C++', 'Go', 'GCP', 'AWS', 'Terraform', 'Mixpanel'],
    },
    {
      company: "Morgan Stanley",
      date: "2022",
      role: 'IT Department Intern',
      description: 'Developed in-house solution for automatic log categorization and easy retrieval.',
      skills: ['Python', 'DataDog'],
    },
    {
      company: "Care Giver for My Babies",
      date: "2012-Forever",
      role: 'Dog Daddy',
      description: 'Cared for my doggies.',
      skills: ['Giving Treats', 'Saying Good Boy', 'Rubbing Under Chin'],
    },
  ]
  let jobs = [];
  for (let job of jobsData) {
    jobs.push(
      <Job key={job.title} {...job} />
    )
  }
  return (
    <div className="experience__container">
      <h1 className="home__title">
        Experi<span className="home__title--accent">ence</span>
      </h1>
      {jobs}
    </div>
  )
}

function Job({company, date, role, description, skills }) {
  console.log(skills);
  let skillTags = [];
  for (let skill of skills) {
    skillTags.push(
      <p className="tag">{skill}</p>
    )
  }
  return (
    <div className="experience__job">
      <div className="experience__job--main" >
        <div className="experience__job--header">
          <h2 className="experience__job--company">
            {company}
          </h2>
          <p className="experience__job--date">
            {date}
          </p>
        </div>
        <div className="experience__job--details">
          <p className="experience__job--role">
            <i>{role}</i>
          </p>
          <p className="experience__job--description">
            {description}
          </p>
        </div>
      </div>
      <div className="experience__job--skills">
        {skillTags}
      </div>
    </div>
  )
}

Job.propTypes = {
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};


function Education() {
  let jobsData = [
    {
      company: "Waseda University",
      date: "2019-2023",
      role: 'Political Science and Economics',
      description: 'Studied political science and economics.',
      skills: ["R", "Python", "Statistics", "Machine Learning"],
    },
    {
      company: "University of Chicago",
      date: "2021-2022",
      role: 'Economics',
      description: 'Studied mathematics and statistics.',
      skills: ["LinAlg", "Analysis", "Combinatorics", "Positive Economics"],
    },
  ]
  let jobs = [];
  for (let job of jobsData) {
    jobs.push(
      <Job key={job.title} {...job} />
    )
  }
  return (
    <div className="education__container">
      <h1 className="home__title">
        Educa<span className="home__title--accent">tion</span>
      </h1>
      {jobs}
    </div>
  )
}

