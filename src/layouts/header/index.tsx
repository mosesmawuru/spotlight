import React from "react";

import Container from "components/Container";
import {
  HeaderMenu,
  HeaderText,
  HeaderWrapper,
  MenuGroup,
  MenuItem,
} from "./header.styled";
import Logo from "components/Logo";

import discordSVG from "assets/image/discord.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>Spotlight just applied to YC!</HeaderText>
      <Container>
        <HeaderMenu>
          <div>
            <Logo />
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
          <div>
            <img src={discordSVG} alt="discord" />
          </div>
        </HeaderMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
