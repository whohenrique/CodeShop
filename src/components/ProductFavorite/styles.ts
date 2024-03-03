import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.WHITE,
    width: '48%',
    height: 240,
    flexDirection: 'column',
    marginTop: 10,
    
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    padding: 4,
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.pattern14,
  },
  price: {
    fontSize: 18,
    fontFamily: theme.font_family.bold,
    color: theme.colors.GREEN,
  },
});