import React from "react";
import github from "../img/github.png";
import linkedIn from "../img/linkedin.png";
import mail from "../img/outlook.png";
import insta from "../img/instagram.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="c-form">
        <form className="form">
          <input type="text" placeholder="Name" name="user_name" />
          <br />
          <input type="text" placeholder="Subject" name="user_subject" />
          <br />

          <input type="text" placeholder="Email" name="user_email" />
          <br />
          <br />
          <textarea rows="5" placeholder="Message" name="message" />

          <button className="btn btn-light">Submit</button>
        </form>
      </div>

      <div className="c-info">
        <div className="c-info-item">
          <img src={mail} alt="mail" className="c-icon"></img>
        </div>
        <div className="c-info-item">
          <a href="https://github.com/khushii12">
            <img src={github} alt="github" className="c-icon"></img>
          </a>
        </div>
        <div className="c-info-item">
          <a href="https://www.linkedin.com/in/khushi-32b4ba1b6/">
            <img src={linkedIn} alt="linkedIn" className="c-icon"></img>
          </a>
        </div>
        <div className="c-info-item">
          <a href="https://www.instagram.com/khu.shi/" className="">
            <img src={insta} alt="instagram" className="c-icon"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
