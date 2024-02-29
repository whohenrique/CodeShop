import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { productList } from '@/data/CodeShopList';
import { ProductProps } from '@/@types/product';
import Product from '@/components/Product';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Header from '@/components/Header';

export default function Home() {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <Product {...item} navigation={navigation}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={productList}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}