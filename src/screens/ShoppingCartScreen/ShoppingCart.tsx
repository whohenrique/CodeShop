import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem, Text,  } from 'react-native';
import ProductCart from '../../components/ProductCart';
import { productList, } from '../../data/CodeShopList';
import { ProductProps } from '../../@types/product';

import { styles } from './styles';

export default function ShoppingCart() {
  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <ProductCart {...item} />
  );

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Meus produtos</Text>
        <FlatList 
          style={styles.flatListContainer}
          keyExtractor={item => item.id.toString()}
          data={productList}
          renderItem={renderItem}
        />
      </SafeAreaView>
  )
}