import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.GRAY,
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        flexDirection: "column",
        marginTop: 10,
        marginLeft: 5,
    },
    contenteButton: {
        marginBottom: 10,
    },
});