import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import productImage from '../../assets/Teclado Gamer.jpg';
import { ProductCartProps } from './productCart';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from "react-native-elements";

import { styles } from './styles';

export default function ProductCart({active, image, title, price}: ProductCartProps) {
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
              <Ionicons name='trash' size={26} onPress={() => {}}/>
            </TouchableOpacity>
          </View>      
      </SafeAreaView>
    </SafeAreaView>
  )
}