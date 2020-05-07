import React, { Component } from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="contact-container">
          <FontAwesomeIcon size="2x" icon="phone" />
          <h1 className="contact-item">(248) 766-2678</h1>
        </div>
        <div className="contact-container">
          <FontAwesomeIcon size="2x" icon="envelope" />
          <h1 className="contact-item">mitchbudden79@gmail.com</h1>
        </div>
        <div className="contact-container">
          <FontAwesomeIcon size="2x" icon="camera" />
          <h1 className="contact-item">
            <a href="https://www.instagram.com/mitchbudden/?hl=en">
              mitchbudden
            </a>
          </h1>
        </div>
        <div className="contact-container">
          <h1 className="contact-item">
            <span className="mock-icon">in </span>
            <a href="https://www.linkedin.com/feed/">Mitchell Budden</a>
          </h1>
        </div>
        <div className="contact-container">
          <FontAwesomeIcon size="2x" />
          <h1 className="contact-item">
            <span className="mock-icon">f </span>
            <a href="https://www.facebook.com/mitchell.budden.5">
              Mitchell Budden
            </a>
          </h1>
        </div>
      </div>
    );
  }
}

export default Footer;
