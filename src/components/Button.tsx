import React from "react";
import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border-radius: 100px;
  background: #ffffff;
  outline: none;
  border: none;
  padding: 10px 10%;
  font-size: clamp(12px, 4vw, 19px);
  font-weight: 800;
  color: #051730;
  transition: all 0.3s;
  :hover {
    background: #c0bcfc;
  }
`;

const Button = ({ label, onClick }: any) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>;
};

export default Button;
