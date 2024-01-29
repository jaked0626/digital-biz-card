import { Job } from './Experience';

export default function Education() {
  let jobsData = [
    {
      company: 'Waseda University',
      link: 'https://en.wikipedia.org/wiki/Waseda_University',
      date: '2019-2023',
      role: 'Political Science and Economics',
      description:
        'GPA 3.74. Studied political science and economics. Research assistantship.',
      skills: ['R', 'Python', 'Statistics', 'Machine Learning'],
    },
    {
      company: 'University of Chicago',
      link: 'https://en.wikipedia.org/wiki/University_of_Chicago',
      date: '2021-2022',
      role: 'Economics',
      description:
        'GPA 3.93. Studied mathematics and statistics, led student research projects.',
      skills: ['LinAlg', 'Analysis', 'Combinatorics', 'Positive Economics'],
    },
  ];
  let jobs = [];
  for (let job of jobsData) {
    jobs.push(<Job key={job.title} {...job} />);
  }
  return (
    <div className="education__container">
      <h1 className="title">
        Educa<span className="title--accent">tion</span>
      </h1>
      {jobs}
    </div>
  );
}
