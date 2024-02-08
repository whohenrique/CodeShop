import { NavigationContainer } from "@react-navigation/native";

import TabBottomRoutes from "./tab.routes";


export default function Router() {
    return (
        <NavigationContainer>
            <TabBottomRoutes />
        </NavigationContainer>    
    )

}