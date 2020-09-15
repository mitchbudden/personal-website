import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../styles/global.css";

import city from "../images/code-images/city.png";
import recipes from "../images/code-images/bsRecipes.jpg";
import b from "../images/code-images/b-logo.jpg";
import temp from "../images/code-images/temp.jpg";
import clock from "../images/code-images/clock.png";
import simon from "../images/code-images/Simon.svg";
import tic from "../images/code-images/tic.jpg";

class Code extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        link: "https://specialist-1f389.web.app/",
        image: b,
        name: "React / Redux / Firebase",
        description: "Bluelinks.io"
      },
      {
        link: "https://codepen.io/mbudden/pen/zWZQZg?editors=1010",
        image: city,
        name: "AngularJS",
        description: "City Selector"
      },
      {
        link: "https://codepen.io/mbudden/pen/yKJaQN",
        image: recipes,
        name: "AngularJS",
        description: "Recipe Page"
      },
      {
        link: "//codepen.io/mbudden/pen/wmbaBr",
        image: recipes,
        name: "CSS",
        description: "Spinner doodles"
      },
      {
        link: "https://codepen.io/mbudden/pen/MVXeWW",
        image: temp,
        name: "D3",
        description: "Global Temperature Heat map"
      },
      {
        link: "https://codepen.io/mbudden/pen/PRygaX",
        image: clock,
        name: "React",
        description: "Count Down Clock"
      },
      {
        link: "https://codepen.io/mbudden/pen/ggBpgQ",
        image: simon,
        name: "JQuery",
        description: "Simon Game"
      },
      {
        link: "https://codepen.io/mbudden/pen/VPaOQQ",
        image: tic,
        name: "JQuery",
        description: "Tic Tac Toe"
      }
    ];
  }

  render() {
    return (
      <div className="banner">
        <Nav selected="Code" />
        <div className="gallery-flex">
          {this.items.map(item => {
            return (
              <div className="col-xs-4">
                <a href={item.link} target="_blank">
                  <div className="img-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-responsive imgs"
                    />
                    <h2 className="img-description">{item.name}</h2>
                    <h2 className="codePen">{item.description}</h2>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Code;
