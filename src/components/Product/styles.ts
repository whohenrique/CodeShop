import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.WHITE,
    height: 140,
    width: '95%'
  },
  productImage: {
    width: 160,
    height: 110,
    borderRadius: 5,
  },
  productInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '75%',
    maxWidth: '50%',
  },
  productTitle: {
    fontSize: theme.font_size.title_2,
    fontWeight: '500',
  },
  productPrice: {
    color: theme.colors.GREEN,
    fontSize: 16,
    fontWeight: '600',
  },
});