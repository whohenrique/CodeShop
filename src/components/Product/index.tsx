import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ProductProps } from './product';
import { useProductContext } from '@/hooks/ProductsContext';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

interface Props extends ProductProps {
  navigation: any; 
}

export default function Product({id, image, title, price, navigation}: Props) {
  const { toggleFavorite, products } = useProductContext();
  const [favorite, setFavorite] = useState(isProductFavorite());

  useEffect(() => {
    setFavorite(isProductFavorite());
  }, [products]);

  function isProductFavorite() {
    return products.some(product => product.id === id && product.favorite);
  }

  const handleToggleFavorite = () => {
    toggleFavorite(id);
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
              <TouchableOpacity style={{paddingLeft: 20}} onPress={handleToggleFavorite}>
              <Ionicons name={favorite ? 'heart' : 'heart-outline'} size={24} color={favorite ? 'red' : 'black'} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.productPrice}>R$ {price} à vista</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}