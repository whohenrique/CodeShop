import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: theme.font_size.title,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
  },
  listEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%'
  },
  listEmptyMessage: {
    fontSize: 18,
    color: '#9E9DAA',
    fontWeight: '500',
  },
});