import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import Gallery from "./components/gallery.jsx";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faCamera,
  faStreetView
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faEnvelope, faCamera, faStreetView);

ReactDOM.render(
  <Provider>
    <Router path="/" history={browserHistory}>
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
