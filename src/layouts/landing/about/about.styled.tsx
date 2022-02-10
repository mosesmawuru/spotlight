import styled from "styled-components";

export const AboutSection = styled.div`
  max-width: 622px;
  width: 90%;
  margin: 125px auto;
  background: #c0bcfc;
  padding: 60px 90px;
  border-radius: 30px;
`;

export const AboutTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: #051730;
  text-align: center;
`;

export const AboutButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  & > *:not(:first-child) {
    margin-left: 25px;
  }
`;