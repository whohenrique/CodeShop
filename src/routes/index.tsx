import { NavigationContainer } from "@react-navigation/native";
import TabBottomRoutes from "./routes";

export default function Router() {
    return (
        <NavigationContainer>
            <TabBottomRoutes />
        </NavigationContainer>    
    )

}