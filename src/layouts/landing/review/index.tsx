import React from "react";
import {
  RCardDesc,
  RCardDescPart,
  RCardDescSection,
  ReviewCard,
  ReviewDesc,
  ReviewSection,
  ReviewTitle,
} from "./review.styled";

import manSVG from "assets/image/Blue_Man.svg";

const ReviewPart = () => {
  return (
    <ReviewSection>
      <ReviewTitle>A new review platform</ReviewTitle>
      <ReviewDesc>
        Spotlight is a modern review platform for your local favorites. A place
        where people can talk about the places they love, help others find new
        great places, and show the business you love the support they deserve.
      </ReviewDesc>
      <ReviewCard>
        <ReviewTitle>Our mission</ReviewTitle>
        <RCardDescSection>
          <RCardDescPart>
            <RCardDesc>✔ A clean, modern experience</RCardDesc>
            <RCardDesc>✔ Protecting user data</RCardDesc>
            <RCardDesc>
              ✔ A platform that encourages building communities around
              restaurants
            </RCardDesc>
            <RCardDesc>
              ✔ Form relationships with our partner locations to help their
              business grow
            </RCardDesc>
          </RCardDescPart>
          <img src={manSVG} alt="manSVG" />
        </RCardDescSection>
      </ReviewCard>
    </ReviewSection>
  );
};

export default ReviewPart;
