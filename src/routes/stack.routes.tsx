import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "@/screens/DetailScreen/Detail";
import BottomTabNavigator from "./tab.routes";

import { theme } from "@/theme";

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  Detail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.BLACK,  
        },
        headerTintColor: theme.colors.WHITE,
      }}
    >
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}