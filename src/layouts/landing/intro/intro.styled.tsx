import styled from "styled-components";

export const IntroSection = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: space-between;
`;

export const IntroTextSection = styled.div`
  padding-top: 6%;
  width: 45%;
  color: #051730;
  h1 {
    margin: 0;
    font-size: 40px;
    font-weight: 700;
  }
  p {
    margin: 0;
    margin-top: 10px;
    font-size: 21px;
    line-height: 31px;
    font-weight: 500;
    opacity: 0.75;
  }
  div {
    margin-top: 27px;
    & > *:not(:first-child) {
      margin-left: 25px;
    }
  }
`;

export const IntroImageSection = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  img {
    width: 45%;
  }
  .intro_img2 {
    padding-top: 10%;
  }
`;
