import React, { useEffect, useState } from "react";

import Container from "components/Container";
import {
  DiscordBtn,
  HeaderMenu,
  HeaderText,
  HeaderWrapper,
  MenuGroup,
  MenuItem,
  MobileLayout,
  MobileLinks,
  MobileMenuButton,
  MobileSidebar,
  SidebarLogo,
} from "./header.styled";
import Logo from "components/Logo";

import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logoSVG from "assets/image/logo.svg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menu, setMenu] = useState(false);

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

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setMenu(false);
    }
  };

  useEffect(() => {
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderWrapper id="header">
      <HeaderText>Spotlight just applied to YC!</HeaderText>
      <Container>
        <HeaderMenu id="headerMenu">
          <div>
            {isMobile && (
              <MobileMenuButton>
                <GiHamburgerMenu onClick={() => setMenu(true)} />
              </MobileMenuButton>
            )}
            <Link to="/">
              <Logo />
            </Link>
            {!isMobile && (
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
            )}
          </div>
          <DiscordBtn>
            <FaDiscord />
          </DiscordBtn>
        </HeaderMenu>
      </Container>
      <MobileSidebar menu={menu}>
        <SidebarLogo>
          <Link to="/">
            <img src={logoSVG} alt="logo" />
            <span>Spotlight</span>
          </Link>
        </SidebarLogo>
        <MobileLinks>
          <Link to="">Home</Link>
          <Link to="">Blog</Link>
          <Link to="">Terms</Link>
          <Link to="">Privacy</Link>
          <Link to="">Discord</Link>
        </MobileLinks>
      </MobileSidebar>
      <MobileLayout menu={menu} onClick={() => setMenu(false)} />
    </HeaderWrapper>
  );
};

export default Header;
