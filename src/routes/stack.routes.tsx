import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen/Home";
import Detail from "../screens/DetailScreen/Detail";
import BottomTabNavigator from "./tab.routes";
import { theme } from "../theme";

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  Detail: { id: number };
};

const Stack = createNativeStackNavigator();

export default function StackNavigator<RootStackParamList>() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'AAAAAAA',
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