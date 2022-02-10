import Button from "components/Button";
import React from "react";
import { AboutButtons, AboutSection, AboutTitle } from "./about.styled";

const AboutPart = () => {
  return (
    <AboutSection>
      <AboutTitle>Talk about the places you love</AboutTitle>
      <AboutButtons>
        <Button label="App Store" onClick={() => {}} />
        <Button label="Play Store" onClick={() => {}} />
      </AboutButtons>
    </AboutSection>
  );
};

export default AboutPart;
