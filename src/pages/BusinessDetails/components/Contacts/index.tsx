import React from "react";
import { useTheme } from "styled-components";

import { FontAwesome } from "@expo/vector-icons";

import { Container, Title, Content, Button } from "./styles";

const Contacts: React.FC = () => {
  const { metrics } = useTheme();

  return (
    <Container>
      <Title>Contato</Title>

      <Content>
        <Button>
          <FontAwesome
            size={metrics.RFValue(30)}
            color="#3b5998"
            name="facebook-square"
          />
        </Button>

        <Button>
          <FontAwesome
            size={metrics.RFValue(30)}
            color="#25d366"
            name="whatsapp"
          />
        </Button>

        <Button>
          <FontAwesome
            size={metrics.RFValue(30)}
            color="#C13584"
            name="instagram"
          />
        </Button>

        <Button>
          <FontAwesome
            color="#1f68c1"
            size={metrics.RFValue(30)}
            name="phone"
          />
        </Button>
      </Content>
    </Container>
  );
};

export { Contacts };
