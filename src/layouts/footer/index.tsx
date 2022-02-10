import React from "react";
import {
  FooterLinks,
  FooterLogo,
  FooterSection,
  FooterWrapper,
  LinkGroup,
  SocialGroup,
} from "./footer.styled";

import Container from "components/Container";
import logoSVG from "assets/image/logo.svg";
import { Link } from "react-router-dom";

import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterSection>
          <div>
            <FooterLogo>
              <img src={logoSVG} alt="logo" />
              <span>Spotlight</span>
            </FooterLogo>
            <FooterLinks>
              <span>© Web4, Inc. {new Date().getFullYear()}</span>
              <LinkGroup>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Cookies Policy</Link>
                <Link to="/">Blog</Link>
              </LinkGroup>
            </FooterLinks>
          </div>
          <SocialGroup>
            <FaTwitter />
            <FaInstagram />
            <FaDiscord />
          </SocialGroup>
        </FooterSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
