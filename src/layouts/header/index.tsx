import React, { useEffect } from "react";

import Container from "components/Container";
import {
  DiscordBtn,
  HeaderMenu,
  HeaderText,
  HeaderWrapper,
  MenuGroup,
  MenuItem,
} from "./header.styled";
import Logo from "components/Logo";

import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

const Header = () => {
  const handleScroll = () => {
    const headerElem: any = document.getElementById("header");
    const headerMenu: any = document.getElementById("headerMenu");
    if (document.documentElement.scrollTop === 0) {
      headerElem.style.background = "transparent";
      headerElem.style.boxShadow = "none";
      headerMenu.style.padding = "28px 0";
    } else {
      headerElem.style.background = "#ffc8a0";
      headerElem.style.boxShadow = "0 0 5px 5px #00000040";
      headerMenu.style.padding = "20px 0";
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper id="header">
      <HeaderText>Spotlight just applied to YC!</HeaderText>
      <Container>
        <HeaderMenu id="headerMenu">
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <MenuGroup>
              <MenuItem>
                <Link to="/">Homepage</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Terms</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Privacy</Link>
              </MenuItem>
            </MenuGroup>
          </div>
          <DiscordBtn>
            <FaDiscord />
          </DiscordBtn>
        </HeaderMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
