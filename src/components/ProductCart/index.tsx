import React, { useState} from 'react';
import { View, Text,Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ProductCartProps } from './productCart';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export default function ProductCart({id, image, title, price, activeCart, onRemove }: ProductCartProps) {
  const [quantity, setQuantity] = useState(1);

  const handleRemoveItemCart = () => {
    onRemove();
  };
  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.product}>
          <Image source={image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{title}</Text>
              <View style={styles.productQuantity}>
                <TouchableOpacity onPress={handleDecreaseQuantity}>
                  <FontAwesome6 name="minus" size={15} color="black" />
                </TouchableOpacity>

                <Text style={{fontWeight: 'bold', fontSize: 18}}>{quantity}</Text>

                <TouchableOpacity onPress={handleIncreaseQuantity}>
                  <FontAwesome6 name="add" size={15} color="black" />
                </TouchableOpacity>

              </View>
              <View style={{width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <Text style={styles.productPrice}>R${price}</Text>
                <TouchableOpacity onPress={handleRemoveItemCart}>
                  <Ionicons name='trash' size={24}  color="red"/>
                </TouchableOpacity>
              </View>
            </View>  
      </View>
    </SafeAreaView>
  )
}