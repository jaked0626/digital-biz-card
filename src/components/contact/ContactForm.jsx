import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const resetForm = () => {
    // Reset form fields
    setFullname('');
    setEmail('');
    setMessage('');
    setSubject('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    let isValidForm = handleValidation();
    if (!isValidForm) {
      return;
    }

    setShowSuccessMessage(false);
    setShowFailureMessage(false);
    setButtonText('Sending...');

    axios.post('https://monkey-coding-blog.vercel.app/api/linemessage', {
      fullname: fullname,
      email: email,
      subject: subject,
      message: message,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      resetForm();
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
      console.log(`Form successfully received from: ${email}`);
    })
    .catch(error => {
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText('Send');
      console.log(error);
      return;
    });
  };

  return (
    <div className="contact__form--container">
      <form onSubmit={handleSubmit} className="contact__form--container">
        <div className="contact__form--input-container">
          <label htmlFor="fullname" className="home__text">
            Your Full Name<span className="home__text--accent">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            className={`${errors.fullname ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder=""
          />
          {
            // validation error
            errors.fullname && (
              <span className="error-message">Please enter your full name</span>
            )
          }
        </div>

        <div className="contact__form--input-container">
          <label htmlFor="email" className="home__text">
            Your Email<span className="home__text--accent">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`${errors.email ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder=""
          />
          {errors.email && (
            <span className="error-message">
              Please enter a valid email address
            </span>
          )}
        </div>

        <div className="contact__form--input-container">
          <label htmlFor="subject" className="home__text">
            Subject<span className="home__text--accent">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className={`${errors.subject ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder=""
          />
          {errors.subject && (
            <span className="error-message">Please enter a subject</span>
          )}
        </div>

        <div className="contact__form--input-container">
          <label htmlFor="message" className="home__text">
            Message<span className="home__text--accent">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className={`${errors.message ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder=""
            rows="5"
          />
          {errors.message && (
            <span className="error-message">Please enter a message</span>
          )}
        </div>
        <div className="contact__form--buttonElement">
          <button
            type="submit"
            className="rounded-md bg-teal-400 py-2 px-4 text-white transition duration-200 hover:bg-teal-200"
          >
            {buttonText}
          </button>
          {showSuccessMessage && (
            <span className="home__text">Message Sent!</span>
          )}
          {showFailureMessage && (
            <span className="error-message">
              Error: Please try again. If it still does not work, email me.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
