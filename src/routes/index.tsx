import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/auth";

import { TabRoutes } from "./AppRoutes/tab.routes";
import { AuthRoutes } from "./AuthRoutes/auth.routes";

const Routes: React.FC = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      {!!token ? <TabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export { Routes };
