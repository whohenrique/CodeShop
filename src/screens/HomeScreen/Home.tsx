import { SafeAreaView, ScrollView, Text } from 'react-native';
import Header from '../../components/Header';
import Product from '../../components/Product';

import { styles } from './styles';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
        <Product 
          image
          title='Teclado Gamer Redragon'
          price='299,99'
          favorite={false}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

