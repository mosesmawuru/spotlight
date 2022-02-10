import Button from "components/Button";
import React from "react";
import {
  IntroImageSection,
  IntroSection,
  IntroTextSection,
} from "./intro.styled";

import introSVG1 from "assets/image/intro1.svg";
import introSVG2 from "assets/image/intro2.svg";

const IntroPart = () => {
  return (
    <IntroSection>
      <IntroTextSection>
        <h1>Talk about the places you love</h1>
        <p>
          Spotlight lets you bring your favorite restaurants, bars and
          everything in-between to places where your interactions with them will
          be meaningful.
        </p>
        <div>
          <Button label="App Store" onClick={() => {}} />
          <Button label="Play Store" onClick={() => {}} />
        </div>
      </IntroTextSection>
      <IntroImageSection>
        <img src={introSVG2} className="intro_img1" alt="intro1" />
        <img src={introSVG1} className="intro_img2" alt="intro2" />
      </IntroImageSection>
    </IntroSection>
  );
};

export default IntroPart;
