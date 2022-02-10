import React from "react";
import Container from "components/Container";
import { GlimpsePart, IntroPart, ReviewPart } from "layouts/landing";
import DotGroup from "components/DotGroup";

const LandingPage = () => {
  return (
    <Container>
      <IntroPart />
      <ReviewPart />
      <DotGroup />
      <GlimpsePart />
      <DotGroup />
    </Container>
  );
};

export default LandingPage;
