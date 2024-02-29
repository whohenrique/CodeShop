import React, { useContext, useEffect } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProductContext } from '@/hooks/ProductsContext';
import Button from '@/components/Button';

import { styles } from './styles';

export default function Detail() {
  const { products } = useContext(ProductContext) ?? { products: [] }; 
  const navigation = useNavigation();
  const routeParams = useRoute().params as { productId: number };
  
  useEffect(() => {
    const product = products.find(p => p.id === routeParams.productId);
    if (product) {
      navigation.setOptions({ title: product.title });
    }
  }, [navigation, products, routeParams.productId]);

  const product = products.find(p => p.id === routeParams.productId);

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Produto não encontrado</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%'}} >
        {product.image ? (
          <Image source={product.image} style={{ width: '100%', height: 450 }} resizeMode='stretch' />
        ) : (
          <Text>Imagem não disponível</Text>
        )}
        <View style={styles.content}>
          <Text style={{fontSize: 20, fontWeight: '700'}} >R$ {product.price}</Text>
          <Text style={{fontSize: 16, fontWeight: '400', }} >{product.description}</Text>
        </View>
      </View>

      <View style={styles.contenteButton}>
        <Button 
          title='Adicionar ao Carrinho'
          width={350}
          height={44}
        />
      </View>
    </SafeAreaView>
  );
}
