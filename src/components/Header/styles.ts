import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 150,
        backgroundColor: theme.colors.BLACK,
    },
    textContainer: {
        color: theme.colors.WHITE,
        fontSize: theme.font_size.title,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchBar: {
        height: 44,
        width: 350,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.colors.WHITE,
        color: theme.colors.BLACK,
    },
});