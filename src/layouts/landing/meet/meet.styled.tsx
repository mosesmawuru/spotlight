import styled from "styled-components";

export const MeetSection = styled.div`
  background: #ffffff;
  border-radius: 30px;
  padding: 32px;
  position: relative;
  img {
    position: absolute;
    max-width: 153px;
    width: 100%;
    top: -70%;
    right: 25%;
  }
`;

export const MeetTitle = styled.h1`
  font-weight: bold;
  font-size: clamp(22px, 4.3vw, 35px);
  color: #051730;
  text-align: center;
  margin: 0 0 10px 0;
`;

export const MeetDesc = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: clamp(14px, 4.3vw, 23px);
  color: #051730;
  opacity: 0.75;
`;
