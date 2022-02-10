import React from "react";
import Container from "components/Container";
import {
  AboutPart,
  GlimpsePart,
  IntroPart,
  MeetPart,
  ReviewPart,
} from "layouts/landing";
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
      <AboutPart />
    </Container>
  );
};

export default LandingPage;
