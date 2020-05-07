import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class Code extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav selected="Code" />
        <h1 className="gallery-title">Projects</h1>
        <Footer />
      </div>
    );
  }
}

export default Code;
