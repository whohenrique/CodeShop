import { View, Image, TouchableOpacity, Text } from 'react-native';
import { ProductFavoriteProps } from './productFavorite';
import { useProductContext } from '@/hooks/ProductsContext';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

interface Props extends ProductFavoriteProps {
  navigation: any; 
}

export default function ProductFavorite({id, image, title, price, navigation}: Props) {
  const { toggleShoppingCart } = useProductContext(); 

  const handleAddToCart = () => {
    toggleShoppingCart(id); 
  };
  
  const navigateToDetail = () => {
    navigation.navigate('Detail', { productId: id }); 
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={navigateToDetail}>
          <View>
            <Image source={image} style={styles.image} resizeMode='stretch' />
          </View>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.price}>R${price}</Text>
              <TouchableOpacity onPress={handleAddToCart}>
                <MaterialIcons name='add-shopping-cart' size={26} />
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>
  )
}