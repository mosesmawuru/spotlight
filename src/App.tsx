import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { LandingPage } from "pages";
import { MyMark } from "ui/layouts/MyMark";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <MyMark />
    </Router>
  );
}

export default App;
