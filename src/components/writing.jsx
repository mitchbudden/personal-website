import React, { Component } from "react";
import Nav from "./nav";
import "../styles/global.css";
import articleList from "../articleList.js";

class Writing extends Component {
  constructor() {
    super();
    this.articleNames = [];
  }

  componentDidMount() {
    let names = [];

    articleList.forEach(article => {
      names.push({ name: article.title, category: article.category });
    });
    this.articleNames = names;
    this.forceUpdate();
  }

  makeLink(name) {
    return name.toLowerCase().replace(" ", "-");
  }

  render() {
    return (
      <div className="banner">
        <Nav selected="Writing" />
        <div className="article-container">
          <h1 className="gallery-title">Recent Articles</h1>
          {this.articleNames.map(article => {
            return (
              <a
                className="article-link"
                href={this.makeLink(article.name)}
                target="_blank"
              >
                {article.name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Writing;
