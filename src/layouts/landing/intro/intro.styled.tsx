import styled from "styled-components";

export const IntroSection = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding-top: 280px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 170px;
  }
`;

export const IntroTextSection = styled.div`
  padding-top: 6%;
  width: 45%;
  color: #051730;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
  h1 {
    margin: 0;
    font-size: clamp(22px, 4.3vw, 40px);
    font-weight: 700;
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }
  p {
    margin: 0;
    margin: auto;
    margin-top: 10px;
    font-size: clamp(12px, 4.3vw, 21px);
    line-height: 31px;
    font-weight: 500;
    opacity: 0.75;
    @media screen and (max-width: 1024px) {
      width: 90%;

      text-align: center;
    }
  }
  div {
    margin-top: 27px;
    & > *:not(:first-child) {
      margin-left: 3%;
    }
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }
`;

export const IntroImageSection = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  .intro_img1 {
    width: 43%;
  }
  .intro_img2 {
    width: 46%;
    padding-top: 10%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 120px;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    img {
      width: 100% !important;
      align-self: center;
    }
  }
`;
