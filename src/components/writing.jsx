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
          <a className="artcile-link" href="NIMBYism">
            NIMBYism
          </a>
          <a className="artcile-link" href="simplicity-is-a-bottleneck">
            Simplicity is a Bottleneck
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Writing;
