import React from "react";
import { ThemeProvider } from "styled-components";
import { BusinessDetails } from "./pages/BusinessDetails";

import { Home } from "./pages/Home";
import { Onboarding } from "./pages/Onboarding";
import { SignIn } from "./pages/SignIn";
import { theme } from "./styles/theme";

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
};

export { Application };
