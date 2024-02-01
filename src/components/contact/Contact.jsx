import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <h3>Get in Touch</h3>
      <h1>Contact Me</h1>
    <div className='container contact__container'>
    <form action=''>
      <input type='text' name='name' placeholder='Your Full Name' required />
      <input type='email' name='email'placeholder='Your Email' required />
      <textarea name='message' rows="7" placeholder='Enter Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact