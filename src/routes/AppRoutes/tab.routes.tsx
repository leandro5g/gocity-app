import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { Home } from "../../pages/Home";
import { BusinessDetails } from "../../pages/BusinessDetails";

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  const { colors, fonts } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.shape,
        tabBarInactiveBackgroundColor: colors.shape,
        tabBarInactiveTintColor: colors.grayDark,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontFamily: fonts.primary_600,
          fontSize: RFValue(12),
        },
      }}
    >
      <Screen name="Home" component={BusinessDetails} />
      <Screen name="Home2" component={Home} />
      <Screen name="Perfil" component={Home} />
    </Navigator>
  );
};

export { TabRoutes };
