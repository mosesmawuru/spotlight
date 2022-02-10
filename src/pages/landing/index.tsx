import React from "react";
import Container from "components/Container";
import { IntroPart, ReviewPart } from "layouts/landing";
import DotGroup from "components/DotGroup";

const LandingPage = () => {
  return (
    <Container>
      <IntroPart />
      <ReviewPart />
      <DotGroup />
    </Container>
  );
};

export default LandingPage;
