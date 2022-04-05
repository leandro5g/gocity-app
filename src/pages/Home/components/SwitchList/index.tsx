import React from "react";

import { Container, Text, Button } from "./styles";

type Selected = "FOOD" | "BUSINESS";

type SwitchListProps = {
  onChange(data: Selected): void;
  isSelected: Selected;
};

const SwitchList: React.FC<SwitchListProps> = ({ onChange, isSelected }) => {
  return (
    <Container>
      <Button
        onPress={() => onChange("FOOD")}
        isSelected={isSelected === "FOOD"}
      >
        <Text isSelected={isSelected === "FOOD"}>Pratos</Text>
      </Button>
      <Button
        onPress={() => onChange("BUSINESS")}
        isSelected={isSelected === "BUSINESS"}
      >
        <Text isSelected={isSelected === "BUSINESS"}>Comércios</Text>
      </Button>
    </Container>
  );
};

export { SwitchList };
