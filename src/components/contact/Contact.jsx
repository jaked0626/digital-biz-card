import ContactGrid from './ContactGrid';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="title">
        Contact <span className="title--accent">Info</span>
      </h1>
      <div className="contact__contacts">
        <ContactGrid />
      </div>
      <h1 className="title">
        Message <span className="title--accent">Me!</span>
      </h1>
      <div className="contact__form">
        <ContactForm />
      </div>
    </div>
  );
}
