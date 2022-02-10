import React from "react";
import Container from "components/Container";
import { IntroPart, ReviewPart } from "layouts/landing";

const LandingPage = () => {
  return (
    <Container>
      <IntroPart />
      <ReviewPart />
    </Container>
  );
};

export default LandingPage;
