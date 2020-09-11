import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class Writing extends Component {
  render() {
    return (
      <div>
        <Nav selected="Writing" />
        <div className="article-container">
          <h1 className="gallery-title">Recent Articles</h1>
          <a className="article-link" href="NIMBYism">
            NIMBYism
          </a>
          <a className="article-link" href="simplicity-is-a-bottleneck">
            Simplicity is a Bottleneck
          </a>
          <a className="article-link" href="career-strategies-for-creatives">
            Career Strategies for Creatives
          </a>
          <a
            className="article-link"
            href="what-happens-when-you-stop-caring-about-things"
          >
            What Happens When You Stop Caring About Things?
          </a>
          <a className="article-link" href="tiny-houses">
            Tiny Houses
          </a>
          <a className="article-link" href="calculating-your-real-wage">
            Calculating Your Real Wage
          </a>
          <a className="article-link" href="emerging-educators">
            Emerging Educators
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Writing;
