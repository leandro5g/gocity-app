import React from "react";

import { MoreInformation } from "./components/MoreInformation";
import { Evaluation } from "./components/Evaluation";
import { Header } from "./components/Header";
import { Contacts } from "./components/Contacts";

import { Container, Content } from "./styles";
import { ListFood } from "./components/ListFood";

const BusinessDetails: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content showsVerticalScrollIndicator={false}>
        <Evaluation />
        <MoreInformation />
        <Contacts />
        <ListFood />
      </Content>
    </Container>
  );
};

export { BusinessDetails };
