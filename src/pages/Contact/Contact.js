import React from 'react';
import "./style.css";

function Contact() {
    return (
        <div id="contactMe" className="row min-vh-100 justify-content-center align-items-center">
        <div className="card w-75 min-vh-50 contactMeCardContainer justify-content-center align-items-center my-5">
            <div className="card-body my-5 contactMeCard w-50">
              <h1 className="card-title">Lets Talk About Your Goals</h1>
              <form action="https://formspree.io/f/mleowkkb" method="POST" className="d-flex flex-column">
                <label className="d-flex flex-column">
                  Your Name:
                  <input type="text" name="name" />
                </label>
                <label className="d-flex flex-column">
                Your email Address:
                  <input type="text" name="_replyto"/>
                </label>
                <label className="d-flex flex-column">
                  How Can I Help You:
                  <textarea rows="4" name="message" ></textarea>
                </label>
                <div className="justify-content-center align-items-center">
                  <button type="submit" className="btn btn-primary btn-lg formSubmit">Send</button>
                </div> 
            </form>
            <div className="my-3">
              <h3 className="contact">Or Contact Me Directly</h3>
              <h5 className= "contactInfo">Email: afam262@gmail.com</h5>
              <h5 className= "contactInfo">Phone: 862-596-7814</h5>
            </div>
          
            </div>
          </div>

    </div>
    );

}

export default Contact;