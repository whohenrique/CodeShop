import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 370,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.WHITE,
    height: '100%',
    width: '100%',
    padding: 10
  },
  productImage: {
    width: 130,
    height: '100%',
  },
  productInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    height: '100%'
  },
  productTitle: {
    fontSize: theme.font_size.title_2,
    fontWeight: '500',
  },
  productPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  productPrice: {
    color: theme.colors.GREEN,
    fontSize: 18,
    fontWeight: '600',
  },
  productQuantity: {
    marginTop: 15,
    backgroundColor: theme.colors.GRAY,
    width: '50%',
    height: 25,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
  }
});
