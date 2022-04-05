import React, { useState, useCallback } from "react";

import { HeaderHome } from "./components/HeaderHome";
import { ListBusiness } from "./components/ListBusiness";
import { ListCategories } from "./components/ListCategories";
import { ListFoods } from "./components/ListFoods";
import { SwitchList } from "./components/SwitchList";

import { Container, List } from "./styles";

type Selected = "FOOD" | "BUSINESS";

const Home: React.FC = () => {
  const [isSelected, setIsSelected] = useState<Selected>("FOOD");

  const handleChangeSelected = useCallback((selected: Selected) => {
    setIsSelected(selected);
  }, []);

  return (
    <Container>
      <HeaderHome />

      <List showsVerticalScrollIndicator={false}>
        <ListCategories />
        <SwitchList isSelected={isSelected} onChange={handleChangeSelected} />

        {isSelected === "FOOD" ? <ListFoods /> : <ListBusiness />}
      </List>
    </Container>
  );
};

export { Home };
