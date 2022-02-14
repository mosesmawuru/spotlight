import styled from "styled-components";

export const HeaderWrapper = styled.div`
  transition: 0.3s all;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export const HeaderText = styled.div`
  background-color: #c0bcfc;
  text-align: center;
  padding: 10px 0;
  color: white;
  font-size: clamp(15px, 4.3vw, 18px);
  font-weight: 700;
`;

export const HeaderMenu = styled.div`
  transition: 0.3s all;
  padding: 28px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
`;

export const MenuGroup = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
  margin-left: 59px;
`;

export const MenuItem = styled.div`
  font-size: 21px;
  font-weight: 500;
  a {
    color: #051730;
    text-decoration: none;
    transition: 0.3s all;
    :hover {
      color: #c0bcfc;
    }
  }
`;

export const DiscordBtn = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 7px 20px;
  background-color: #051730;
  border-radius: 50px;
  color: white;
  transition: all 0.3s;
  svg {
    width: 29px;
    height: 29px;
  }
  :hover {
    background-color: #c0bcfc;
  }
`;

export const MobileMenuButton = styled.div`
  font-size: 25px;
  margin-right: 40px;
  svg {
    cursor: pointer;
  }
`;

export const MobileSidebar = styled.div<{ menu: boolean }>`
  position: fixed;
  max-width: 320px;
  width: 100%;
  z-index: 10;
  height: 100vh;
  left: ${({ menu }) => (menu ? 0 : "-320px")};
  top: 0;
  background: #000000a0;
  backdrop-filter: blur(20px);
  a {
    text-decoration: none;
  }
`;

export const MobileLayout = styled.div<{ menu: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #00000080;
  opacity: ${({ menu }) => (menu ? 1 : 0)};
  visibility: ${({ menu }) => (menu ? "visible" : "hidden")};
`;

export const MobileLinks = styled.div`
  padding: 20px 40px;
  a {
    display: block;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    margin: 20px 0;
  }
`;

export const SidebarLogo = styled.div`
  margin-top: 30px;
  a {
    justify-content: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 44px;
      height: 44px;
      margin-right: 17px;
    }
    span {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }
  }
`;
