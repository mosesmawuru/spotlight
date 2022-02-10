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
`;

export const SocialGroup = styled.div`
  font-size: 30px;
  color: white;
  & > *:not(:first-child) {
    margin-left: 25px;
  }
  & > * {
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      color: #c0bcfc;
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
    font-size: 21px;
    font-weight: 700;
    color: #ffffff;
  }
`;

export const FooterLinks = styled.div`
  margin-top: 5px;
  & > * {
    font-weight: 500;
    font-size: 13px;
    color: #949494;
    text-decoration: none;
  }
  & > *:not(:first-child) {
    margin-left: 15px;
  }
  a {
    transition: all 0.3s;
    :hover {
      color: #c0bcfc;
    }
  }
`;
