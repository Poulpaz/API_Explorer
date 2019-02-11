import './index.css';
import * as serviceWorker from './serviceWorker';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Container from "./Container";

const App = () => (
  <Router>
    <div>
      <Container />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
