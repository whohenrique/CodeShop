import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.WHITE,
    height: 120,
    width: '100%',
    paddingRight: 5,
    margin: 'auto',
  },
  productImage: {
    width: 130,
    height: 90,
    marginRight: 15,
  },
  productInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    maxWidth: '50%',
    gap: 15,
  },
  productTitle: {
    fontSize: theme.font_size.title_2,
    fontWeight: '500',
  },
  productPrice: {
    color: theme.colors.GREEN,
    fontSize: 18,
    fontWeight: '600',
  },
});