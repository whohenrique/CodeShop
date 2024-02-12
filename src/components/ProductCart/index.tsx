import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import productImage from '../../assets/Teclado Gamer.jpg';
import { ProductProps } from '../../@types/product';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from "react-native-elements";

import { styles } from './styles';


export default function ProductCart({image, title, price, active}: ProductProps) {
  const handleCheckboxToggle = () => {}
  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.product}>
          <CheckBox
              checked={active}
              checkedColor="black"
              onPress={handleCheckboxToggle}
            />
          {image && <Image source={productImage} style={styles.productImage}/> }
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{title}</Text>
              <Text style={styles.productPrice}>R$ {price}</Text>
            </View>
          <View>
            <TouchableOpacity style={{paddingLeft: 30}}>
              <Ionicons name='trash' size={20} />
            </TouchableOpacity>
          </View>      
      </SafeAreaView>
    </SafeAreaView>
  )
}