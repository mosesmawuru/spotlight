import React from "react";

import girlSVG from "assets/image/Yellow_Girl.svg";
import { MeetDesc, MeetSection, MeetTitle } from "./meet.styled";

const MeetPart = () => {
  return (
    <MeetSection>
      <img src={girlSVG} alt="girlSVG" />
      <MeetTitle>Meet Sally!</MeetTitle>
      <MeetDesc>
        {
          "Sally is 23 years old & enjoys to travel and eating great food. She finds the best restaurants and bars are those shown to her by friends, but she's away in a new city... Lucky for her she just got a push notification that 100 people in last 24 hours left a review at The Best Burger! Spotlight helps Sally feel like a local."
        }
      </MeetDesc>
    </MeetSection>
  );
};

export default MeetPart;
