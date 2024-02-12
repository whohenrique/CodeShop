import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.GRAY,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
        marginBottom: 20,
      },
      detailsContainer: {
        alignItems: 'center',
      },
      title: {
        fontSize: theme.font_size.title_2,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      price: {
        fontSize: theme.font_size.pattern14,
        color: theme.colors.GREEN,
        fontWeight: 'bold',
      },
});