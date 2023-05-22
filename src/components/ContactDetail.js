import React from 'react'
import './ContactDetailStyle.css'

function ContactDetail() {
  return (
    <>
       <div className="contactDetail">
      <h2>Get In Touch</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, hic?
      </p>
      <form>
        <div className="input-group">
          <input type="text" required placeholder="Your Name" />
        </div>
        <div className="input-group">
          <input type="text" required placeholder="Your Email" />
        </div>
        <div className="input-group">
          <input type="text" required placeholder="Subject" />
        </div>
        <div className="input-group">
          <textarea rows="8" placeholder="Message" required></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default ContactDetail
