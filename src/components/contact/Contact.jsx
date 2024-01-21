import ContactGrid from './ContactGrid';

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="home__title">
        Contact <span className="home__title--accent">Info</span>
      </h1>
      <div className="contact__contacts">
        <ContactGrid />
      </div>
    </div>
  );
}
