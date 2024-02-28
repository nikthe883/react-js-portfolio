
import React, { useState } from 'react';
import "./contact.css"
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const [buttonText, setButtonText] = useState('Submit');

  const handleClick = () => {
    setButtonText('Message Sent');

    setTimeout(() => {
        setButtonText('Submit');
    }, 3000); // Reverts back to 'Submit' after 2 seconds
};

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtni04j', 'template_0qp4jrs', form.current, 'q-aQU0Ahi74VwC3ul')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h3>Get in Touch</h3>
      <h1>Contact Me</h1>
    <div className='container contact__container'>
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your Full Name' required />
      <input type='email' name='email'placeholder='Your Email' required />
      <textarea name='message' rows="7" placeholder='Enter Your Message' required></textarea>
      <button type='submit' className='btn btn-primary' onClick={handleClick}>{buttonText}</button>
    </form>
    </div>
    </section>
  )
}

export default Contact