import styled from "styled-components";

export const MeetSection = styled.div`
  background: #ffffff;
  border-radius: 30px;
  padding: 32px;
  position: relative;
  img {
    position: absolute;
    width: 153px;
    top: -150px;
    right: 20%;
    @media screen and (max-width: 768px) {
      width: 130px;
      top: -127px;
      right: 15%;
    }
    @media screen and (max-width: 425px) {
      width: 96px;
      top: -94px;
      right: 10%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 50px 20px;
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
