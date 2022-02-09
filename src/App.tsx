import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/landing";
import Header from "layouts/header";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
