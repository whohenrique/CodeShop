import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View, Text,} from 'react-native';
import { useProductContext } from '@/hooks/ProductsContext';
import ProductFavorite from '@/components/ProductFavorite';
import { ProductProps } from '@/@types/product';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

const numColumns = 2;

export default function Favorites() {
  const navigation = useNavigation();
  const { products } = useProductContext();
  const favoriteProducts = products.filter(product => product.favorite);

  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <ProductFavorite {...item} navigation={navigation}/>
  );
    
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoriteProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        columnWrapperStyle={{gap: 10, paddingHorizontal: 5}}
        contentContainerStyle={{gap: 10, paddingBottom: 20}}
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <Ionicons name='heart-outline' size={100} color={'#9E9DAA'}/>
            <Text style={styles.listEmptyMessage}>Nenhum produto nos seus favoritos.</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}
