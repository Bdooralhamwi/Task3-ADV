import React from 'react'
import Map from "../../components/Map";
import "./Contactus.css"
export default function Contactus() {
  return (
    <div>
        <div className="back-photo">
            <span>HOME / CONTACTUS</span>
            <h1>CONTACTUS</h1>
        </div>
        <div className="contact-componant">
      <div className="container">
        <div className="content">
          <div className="left">
          <h1>| CONTACTUS</h1>
          <h2>
            Get In Touch <br /> with Our Agents
          </h2><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus necessitatibus explicabo accusantium quam corporis architecto, placeat, eveniet eligendi dolor, maxime esse laborum repudiandae nesciunt obcaecati magni sunt excepturi vel!
          Laudantium dolorem quia, culpa quos a quo perferendis repellendus veniam iste aspernatur impedit, velit dicta enim fugit totam quod exercitationem. Aliquam explicabo ipsam aperiam. Tempora alias et quos aspernatur eaque?</p>
            <div className="contact-option" style={{display:"grid"}}>
              <div className="contact-option-left">
                <img src="/images/phone-icon.png" alt="phone-icon" />
                <div className="title">
                  <span>010-020-0340</span>
                  <p>Phone Number</p>
                </div>
              </div>
              <div className="contact-option-right">
                <img src="/images/email-icon.png" alt="email-icon" />
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
          <div className="down">
            <Map />
          </div>
      </div>
    </div>
    </div>
  )
}
