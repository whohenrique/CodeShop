import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./stack.routes";


export default function Router() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>    
    )

}