import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const inputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === "email") {
          setEmail(inputValue);
        } else if (inputType === "userName") {
          setUserName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };
    
      const formChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

      return (
        <section id="contact" className="contact"> 
        <div>
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* userName */}
            <label for="name">Name</label>
            <input
              value={userName}
              name="userName"
              onChange={inputChange}
              type="text"
              id="name"
            />

            {/* Email */}
            <label for="email">Email</label>
            <input
              value={email}
              name="email"
              onChange={inputChange}
              type="email"
              id="email"
            />

            {/* Message */}
            <label for="message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={inputChange}
              type="message"
              id="message"
            />
            {/* submit button*/}
            <button type="button" onClick={formChange}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error">{errorMessage}</p>
          </div>
        )}
        </div>
        </section>
      );
};

export default Contact;