import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/landing";
import TermsPage from "pages/terms";
import PrivacyPage from "pages/privacy";

import { Footer, Header } from "layouts";
function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/terms" component={TermsPage} />
      <Route exact path="/privacy" component={PrivacyPage} />
      <Footer />
    </Router>
  );
}

export default App;
