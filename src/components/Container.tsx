import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
`;

const Container = ({ children }: any) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
