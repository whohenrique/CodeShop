import { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ProductProps } from '../../@types/product';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

interface Props extends ProductProps {
  navigation: any; 
}

export default function Product({id, image, title, description, price, favorite: initialFavorite, navigation}: Props) {

  const [favorite, setFavorite] = useState(initialFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const navigateToDetail = () => {
    navigation.navigate('Detail', { productId: id }); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.product} onPress={navigateToDetail}>
        <View>
          <Image source={image} style={styles.productImage} />
        </View>

        <View style={styles.productInfo}>
          <View style={styles.content}>
          <Text style={styles.productTitle}>{title}</Text>
            <View>
              <TouchableOpacity style={{paddingLeft: 20}} onPress={toggleFavorite}>
                <Ionicons name={favorite ? 'heart' : 'heart-outline'} size={26} color={favorite ? 'red' : 'black'} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.productPrice}>R$ {price} à vista</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}