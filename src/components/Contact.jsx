import React from "react";
import github from "../img/github.png";
import linkedIn from "../img/linkedin.png";
import insta from "../img/instagram.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hjq2b7h",
        "template_n5dxj9s",
        formRef.current,
        "ofUdRQSK9Jktv-InN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="c-form">
        <form className="form" ref={formRef} onSubmit={handleSubmit}>
          <input
            class="input"
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <br />
          <input
            class="input"
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <br />

          <input
            class="input"
            type="text"
            placeholder="Email"
            name="user_email"
          />
          <br />
          <br />
          <textarea rows="5" placeholder="Message" name="message" />

          <button className="btn btn-light">Submit</button>
          {done && "Message sent. Thanks!"}
        </form>
      </div>

      <div className="c-info">
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
