import React from "react";
import styled from "styled-components";

import logoSVG from "assets/image/logo.svg";

const LogoDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    width: 44px;
    height: 44px;
    margin-right: 17px;
  }
  span {
    font-size: clamp(19px, 4.3vw, 18px);
    font-weight: bold;
    color: #051730;
  }
`;

const Logo = () => {
  return (
    <LogoDiv>
      <img src={logoSVG} alt="logo" />
      <span>Spotlight</span>
    </LogoDiv>
  );
};

export default Logo;
