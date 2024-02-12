import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductContext = createContext<any>(null);

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [productList, setProductList] = useState<any[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  // Funções para manipular a lista de produtos favoritos
  const toggleFavorite = (productId: number) => {
    // Implemente a lógica para alternar o estado do produto favorito
  };

  // Funções para manipular o carrinho de compras
  const addToCart = (productId: number) => {
    // Implemente a lógica para adicionar um produto ao carrinho
  };

  const removeFromCart = (productId: number) => {
    // Implemente a lógica para remover um produto do carrinho
  };

  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedProductList = await AsyncStorage.getItem('productList');
        if (savedProductList) setProductList(JSON.parse(savedProductList));

        const savedFavoriteProducts = await AsyncStorage.getItem('favoriteProducts');
        if (savedFavoriteProducts) setFavoriteProducts(JSON.parse(savedFavoriteProducts));

        const savedCartProducts = await AsyncStorage.getItem('cartProducts');
        if (savedCartProducts) setCartProducts(JSON.parse(savedCartProducts));
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadSavedData();
  }, []);

  // Atualizar AsyncStorage sempre que houver alterações nos dados
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('productList', JSON.stringify(productList));
        await AsyncStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
        await AsyncStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    saveData();
  }, [productList, favoriteProducts, cartProducts]);

  return (
    <ProductContext.Provider
      value={{
        productList,
        favoriteProducts,
        cartProducts,
        toggleFavorite,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
