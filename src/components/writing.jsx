import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class Writing extends Component {
  render() {
    return (
      <div>
        <Nav selected="Writing" />
        <Footer />
      </div>
    );
  }
}

export default Writing;
