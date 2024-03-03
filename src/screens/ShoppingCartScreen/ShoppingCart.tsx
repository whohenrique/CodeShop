import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { useProductContext } from '@/hooks/ProductsContext';
import { ProductProps } from '@/@types/product';
import { FontAwesome5 } from '@expo/vector-icons';
import ProductCart from '@/components/ProductCart';

import { styles } from './styles';

export default function ShoppingCart() {
  const { products, toggleShoppingCart } = useProductContext();

  const handleRemoveItem = (productId: number) => {
    toggleShoppingCart(productId); 
  };

  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <ProductCart {...item} onRemove={() => handleRemoveItem(item.id)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products.filter(product => product.activeCart)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 10, paddingBottom: 10, marginTop: 20 }}
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
             <FontAwesome5 name='shopping-cart' size={100} color={'#9E9DAA'}/>
             <Text style={styles.listEmptyMessage}>Nenhum produto no seu carrinho</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
