import React, { Component } from "react";
import "../styles/nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav-outer">
        <div className="nav-group">
          <a
            href="/"
            className={
              this.props.selected === "Home" ? "selected-nav-item" : "nav-item"
            }
          >
            Home
          </a>
          <a
            href="/code"
            className={
              this.props.selected === "Code" ? "selected-nav-item" : "nav-item"
            }
          >
            Code
          </a>
          <a
            href="/writing"
            className={
              this.props.selected === "Writing"
                ? "selected-nav-item"
                : "nav-item"
            }
          >
            Writing
          </a>
          <a
            href="/contact"
            className={
              this.props.selected === "Contact"
                ? "selected-nav-item"
                : "nav-item"
            }
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
