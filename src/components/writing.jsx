import React, { Component } from "react";
import Nav from "./nav";
import "../styles/global.css";

class Writing extends Component {
  render() {
    return (
      <div className="banner">
        <Nav selected="Writing" />
        <div className="article-container">
          <h1 className="gallery-title">Recent Articles</h1>
          <a className="article-link" href="NIMBYism" target="_blank">
            NIMBYism
          </a>
          <a
            className="article-link"
            href="simplicity-is-a-bottleneck"
            target="_blank"
          >
            Simplicity is a Bottleneck
          </a>
          <a
            className="article-link"
            href="career-strategies-for-creatives"
            target="_blank"
          >
            Career Strategies for Creatives
          </a>
          <a
            className="article-link"
            href="what-happens-when-you-stop-caring-about-things"
            target="_blank"
          >
            What Happens When You Stop Caring About Things?
          </a>
          <a className="article-link" href="tiny-houses" target="_blank">
            Tiny Houses
          </a>
          <a
            className="article-link"
            href="calculating-your-real-wage"
            target="_blank"
          >
            Calculating Your Real Wage
          </a>
          <a className="article-link" href="emerging-educators" target="_blank">
            Emerging Educators
          </a>
          <a
            className="article-link"
            href="taking-education-personally"
            target="_blank"
          >
            Taking Education Personally
          </a>
        </div>
      </div>
    );
  }
}

export default Writing;
