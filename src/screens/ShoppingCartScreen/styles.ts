import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.GRAY,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  },
  title: {
    fontSize: theme.font_size.title,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
  },
  flatListContainer: {
    width: '100%',
    maxHeight: '70%',
    padding: 10,
  }
});