import React from "react";

import { Container } from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      {/* <Button></Button>

      <Title>{title}</Title>

      <Content></Content> */}
    </Container>
  );
};

export { Header };
