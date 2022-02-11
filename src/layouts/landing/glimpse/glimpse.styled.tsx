import styled from "styled-components";

export const GlimpseSection = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 65px 115px 50px;
  @media screen and (max-width: 1024px) {
    padding: 54px 40px;
  }
  @media screen and (max-width: 600px) {
    padding: 43px 20px;
  }
  @media screen and (max-width: 320px) {
    padding: 43px 5px;
  }
`;

export const GlimpseTitle = styled.div`
  font-weight: bold;
  font-size: clamp(22px, 4.3vw, 35px);
  color: #051730;
  text-align: center;
`;

export const GlimpsSlider = styled.div`
  margin-top: 48px;
  width: 100%;
`;
