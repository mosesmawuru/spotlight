import styled from "styled-components";

export const ReviewSection = styled.div`
  padding-top: 227px;
  color: #051730;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 180px;
  }
  @media screen and (max-width: 390px) {
    padding-top: 100px;
  }
`;

export const ReviewTitle = styled.h1`
  margin: 0;
  padding-bottom: 5px;
  text-align: center;
  font-size: clamp(22px, 4.3vw, 36px);
  font-weight: bold;
`;

export const ReviewDesc = styled.p`
  max-width: 1031px;
  width: 85%;
  margin: 0;
  font-weight: 500;
  font-size: clamp(12px, 4.3vw, 18px);
  text-align: center;
`;

export const ReviewCard = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 32px 65px;
  border-radius: 30px;
  width: 729px;

  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (max-width: 1024px) {
    width: auto;
  }
  @media screen and (max-width: 620px) {
    padding: 32px 40px;
  }
`;

export const RCardDesc = styled.p`
  font-weight: normal;
  font-size: clamp(15px, 4.3vw, 20px);
  margin: 10px 0;
`;

export const RCardDescSection = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    position: absolute;
    width: 20%;
    right: 65px;
    bottom: 0;
    min-width: 97px;
    @media screen and (max-width: 620px) {
      right: 30px;
    }
    @media screen and (max-width: 320px) {
      right: 10px;
    }
  }
`;

export const RCardDescPart = styled.div`
  width: 70%;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
  .last-desc {
    @media screen and (max-width: 620px) {
      width: 70%;
    }
  }
`;
