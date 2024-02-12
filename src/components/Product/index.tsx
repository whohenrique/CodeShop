import { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import productImage from '../../assets/Teclado Gamer.jpg';
import { ProductProps } from '../../@types/product';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Product({image, title, price, favorite: initialFavorite}: ProductProps) {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(initialFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.product} onPress={() => navigation.navigate("Detail")}>
        <View >
          {image && <Image source={productImage} style={styles.productImage}/> }
        </View>

        <View style={styles.productInfo}>
          <View style={styles.content}>
          <Text style={styles.productTitle}>{title}</Text>
            <View>
              <TouchableOpacity style={{paddingLeft: 20}} onPress={toggleFavorite}>
                <Ionicons name={favorite ? 'heart' : 'heart-outline'} size={30} color={favorite ? 'red' : 'black'} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.productPrice}>R$ {price} à vista</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}