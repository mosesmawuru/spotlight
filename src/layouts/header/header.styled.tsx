import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const HeaderText = styled.div`
  background-color: #c0bcfc;
  text-align: center;
  padding: 10px 0;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

export const HeaderMenu = styled.div`
  padding: 28px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    display: flex;
    align-items: center;
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
  }
`;
