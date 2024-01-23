import PropTypes from 'prop-types';

function ContactBox({ icon, text, link }) {
  const textElement = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <h3>{text}</h3>
    </a>
  ) : (
    <h3>{text}</h3>
  );
  return (
    <div className="contact__contacts--box">
      <i className={icon} />
      {textElement}
    </div>
  );
}

ContactBox.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ContactBox.defaultProps = {
  link: '',
};

export default function ContactGrid() {
  let contactGrid = [];
  const contacts = [
    {
      icon: 'fa-solid fa-location-dot',
      text: 'Tokyo, Japan',
    },
    {
      icon: 'fa-solid fa-phone',
      text: '(+81)9014618440',
    },
    {
      icon: 'fa-solid fa-envelope',
      text: 'jakez0626@gmail.com',
      link: 'mailto:jakez0626@gmail.com',
    },
    {
      icon: 'fa-solid fa-circle-check',
      text: 'Open to Freelance and Other Opportunities',
    },
  ];

  for (let contact of contacts) {
    contactGrid.push(<ContactBox {...contact} />);
  }

  return (
    <>
      <div className="contact__contacts--grid">{contactGrid}</div>
    </>
  );
}
