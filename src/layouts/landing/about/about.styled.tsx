import styled from "styled-components";

export const AboutSection = styled.div`
  width: 622px;
  margin: 125px auto;
  background: #c0bcfc;
  padding: 60px 90px;
  border-radius: 30px;
  @media screen and (max-width: 1024px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    padding: 7% 5%;
    margin: 100px auto;
  }
  @media screen and (max-width: 768px) {
    margin: 70px auto;
  }
`;

export const AboutTitle = styled.div`
  font-weight: bold;
  font-size: clamp(20px, 4.3vw, 40px);
  color: #051730;
  text-align: center;
`;

export const AboutButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  & > *:not(:first-child) {
    margin-left: 5%;
  }
`;
