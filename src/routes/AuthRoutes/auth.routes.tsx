import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Onboarding } from "../../pages/Onboarding";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export { AuthRoutes };
