// import React from 'react'

import Map from "../Map";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-componant">
      <img className="back" src="./public/images/contact-bg.jpg" alt="contact-bg" />
      <div className="container">
          <h1>| CONTACTUS</h1>
          <h2>
            Get In Touch <br /> with Our Agents
          </h2>
        <div className="content">
          <div className="left">
            <Map/>
            <div className="contact-option">
              <div className="contact-option-left">
                <img src="/images/phone-icon.png" alt="phone-icon" />
                <div className="title">
                  <span>010-020-0340</span>
                  <p>Phone Number</p>
                </div>
              </div>
              <div className="contact-option-right">
                <img src="/images/email-icon.png" alt="email-icon.png" />
                <div className="title">
                  <span>info@villa.com</span>
                  <p>Business Enail</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <form action="">
              <span for="name">Full Name</span>
              <input type="text" placeholder="Your Name.." />

              <span>Email Address</span>
              <input type="text" placeholder="Your E-mail.." />

              <span>Subject</span>
              <input type="text" placeholder="Subject.." />

              <span>Message</span>
              <textarea placeholder="Your Message"></textarea>
              <input type="submit" className="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
