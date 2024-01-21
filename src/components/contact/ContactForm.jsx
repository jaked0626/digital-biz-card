import { useState } from 'react';

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

  function handleValidation() {
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
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending...');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');

        // Reset form fields
        setFullname('');
        setEmail('');
        setMessage('');
        setSubject('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
      // Reset form fields
      setFullname('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
    console.log(fullname, email, subject, message);
  }
  return (
    <div className="mb-4 rounded-lg px-20 pt-8 pb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-3xl font-bold dark:text-gray-50">
          Contact Jakeydmonkey
        </h1>
        <div className="flex flex-col">
          <label htmlFor="fullname" className="font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            className={`${errors.fullname ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder="Enter your full name"
          />
          {errors.fullname && (
            <span className="mt-1 text-sm text-red-500">
              Please enter your full name
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`${errors.email ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <span className="mt-1 text-sm text-red-500">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="font-medium">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className={`${errors.subject ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder="Enter the subject of your message"
          />
          {errors.subject && (
            <span className="mt-1 text-sm text-red-500">
              Please enter a subject
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className={`${errors.message ? 'border-red-500' : ''} rounded-md border py-2 px-3`}
            placeholder="Enter your message"
            rows="5"
          />
          {errors.message && (
            <span className="mt-1 text-sm text-red-500">
              Please enter a message
            </span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-teal-400 py-2 px-4 text-white transition duration-200 hover:bg-teal-200"
          >
            {buttonText}
          </button>
          {showSuccessMessage && (
            <span className="mt-1 px-5 text-teal-400">Message Sent!</span>
          )}
          {showFailureMessage && (
            <span className="mt-1 px-5 text-red-500">
              Error: Please try again later.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
