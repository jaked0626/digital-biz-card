import { useState } from 'react';
import PropTypes from 'prop-types';
import sendgrid from '@sendgrid/mail';
// import Cors from 'cors'

// // Helper function to initialize middleware
// function initMiddleware(middleware) {
//   return (req, res) =>
//     new Promise((resolve, reject) => {
//       middleware(req, res, (result) => {
//         if (result instanceof Error) {
//           return reject(result)
//         }

//         return resolve(result)
//       })
//     })
// }

// // Initialize the cors middleware
// const cors = initMiddleware(
//   Cors({
//     methods: ['POST'],
//     origin: ['http://localhost:5173', import.meta.env.VITE_SITE_URL], //TODO: replace * with deployed url
//   })
// );

// sendgrid.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

function makeEmail(fullname, email, subject, message) {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Incoming Message</title>
          <meta name="description" content="Message from MonkeyCoding">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        </head>

        <body>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>New message from ${fullname}!</h3>
            <table>
              <tr>
                <th>Name</th>
                <td>${fullname}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>${email}</td>
              </tr>
              <tr>
                <th>Subject</th>
                <td>${subject}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td><textarea name="message">${message}</textarea></td>
              </tr>
            </table>
          </div>
        </body>
      </html>
    `;
}

makeEmail.propTypes = {
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

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
    const emailHtml = makeEmail(fullname, email, subject, message);
    const options = {
      from: import.meta.env.VITE_WEBSITE_EMAIL,
      to: import.meta.env.VITE_JAKE_EMAIL,
      subject: `JAKESBIZCARD Incoming: ${subject}`,
      html: emailHtml,
    };

    console.log(options);

    sendgrid
      .send(options)
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
