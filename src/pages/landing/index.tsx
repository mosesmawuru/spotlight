import React from "react";
import Container from "components/Container";
import { GlimpsePart, IntroPart, MeetPart, ReviewPart } from "layouts/landing";
import DotGroup from "components/DotGroup";

const LandingPage = () => {
  return (
    <Container>
      <IntroPart />
      <ReviewPart />
      <DotGroup />
      <GlimpsePart />
      <DotGroup />
      <MeetPart />
    </Container>
  );
};

export default LandingPage;
