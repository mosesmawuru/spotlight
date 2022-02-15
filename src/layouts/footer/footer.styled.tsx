import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #051730;
  width: 100%;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  @media screen and (max-width: 700px) {
    align-items: start;
  }
`;

export const SocialGroup = styled.div`
  font-size: clamp(26px, 4vw, 30px);
  a {
    color: white;
  }
  & > *:not(:first-child) {
    margin-left: 30px;
  }
  min-width: 118px;
  @media screen and (max-width: 768px) {
    & > *:not(:first-child) {
      margin-left: 20px;
    }
  }
  & > * {
    cursor: pointer;
    transition: all 0.2s;
    :hover {
      color: #6860d6;
    }
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 29px;
    height: 29px;
    margin-right: 17px;
  }
  span {
    font-size: clamp(18px, 4vw, 21px);
    font-weight: 700;
    color: #ffffff;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  margin-top: 5px;
  * {
    font-weight: 500;
    font-size: 13px;
    color: #949494;
    text-decoration: none;
  }
  span {
    margin-right: 15px;
  }
  a {
    transition: all 0.3s;
    :hover {
      color: #c0bcfc;
    }
    white-space: nowrap;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 15px;
  }
  @media screen and (max-width: 700px) {
    & > * {
      margin-top: 15px;
    }
  }
`;
