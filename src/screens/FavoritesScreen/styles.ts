import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.font_size.title
  },
});