import React from "react";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { theme } from "./styles/theme";

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export { Application };
