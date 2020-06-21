import React, { Component } from "react";
import articleList from "../articleList.js";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

class Article extends Component {
  constructor() {
    super();
    this.currentArticle = { title: "", paragraphs: [] };
    this.articles = articleList;
  }

  componentDidMount() {
    this.currentArticle = this.findArticle(this.props.params.id);
    this.forceUpdate();
  }

  findArticle(string) {
    let workingTitle = string.toLowerCase().replace(/-/g, " ");
    for (let i = 0; i < this.articles.length; i++) {
      if (this.articles[i].title.toLowerCase() === workingTitle) {
        return this.articles[i];
      }
    }
  }

  render() {
    return (
      <div>
        <Nav selected="Writing" />
        <h1 className="gallery-title">{this.currentArticle.title}</h1>

        {this.currentArticle.paragraphs.map(paragraph => {
          if (paragraph !== "image") {
            return <h2 className="article-paragraph">{paragraph}</h2>;
          } else {
            return (
              <img
                className="article-image"
                src={this.currentArticle.image}
                alt={this.currentArticle.title}
              />
            );
          }
        })}
        <Footer />
      </div>
    );
  }
}

export default Article;
