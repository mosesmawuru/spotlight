import React from "react";
import styled from "styled-components";

const DotGroupPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 71.5px 0;
  & > *:not(:first-child) {
    margin-top: 25.5px;
  }
`;

const Dot = styled.div`
  width: 11.5px;
  height: 11.5px;
  border: 3px solid #051730;
  border-radius: 50%;
`;

const DotGroup = () => {
  return (
    <DotGroupPart>
      <Dot />
      <Dot />
      <Dot />
    </DotGroupPart>
  );
};

export default DotGroup;
