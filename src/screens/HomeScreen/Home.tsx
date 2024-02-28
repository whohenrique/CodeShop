import { FlatList, ListRenderItem, SafeAreaView, } from 'react-native';
import Header from '@/components/Header';
import Product from '@/components/Product';
import { productList } from '@/data/CodeShopList';
import { ProductProps } from '@/@types/product';

import { styles } from './styles';

export default function Home() {
  
  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <Product {...item} />
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
  )
}

