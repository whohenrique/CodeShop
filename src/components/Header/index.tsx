import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';

import { styles } from './styles'

export default function Header() {

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>{"</CodeShop>"}</Text>
      <View>
        <TextInput
          clearButtonMode='always'
          placeholder='O que você procura?'
          autoCapitalize='none'
          style={styles.searchBar}
          value={searchQuery}
        />
      </View>
    </SafeAreaView>
  )
}