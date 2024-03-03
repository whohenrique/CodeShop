import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { productList } from "@/data/database";
import { ProductProps } from "@/@types/product";

interface ProductContextTypeProps {
    products: ProductProps[];
    toggleFavorite: (productId: number) => void;
    toggleShoppingCart: (productId: number) => void;
}
interface ProductProviderProps {
    children: ReactNode;
}

export const ProductContext = createContext<ProductContextTypeProps>({
    products: [],
    toggleFavorite: () => {},
    toggleShoppingCart: () => {}
});

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const storedProducts = await AsyncStorage.getItem('products');
                if (storedProducts) {
                    setProducts(JSON.parse(storedProducts));
                } else {
                    setProducts(productList);
                }
            } catch (error) {
                console.error('Error fetching products from AsyncStorage:', error);
            }
        };

        fetchProducts();
    }, []);

    const saveProductsToStorage = async (updatedProducts: ProductProps[]) => {
        try {
            await AsyncStorage.setItem("products", JSON.stringify(updatedProducts));
        } catch (error) {
            console.error("Error saving products to AsyncStorage:", error);
        }
    };

    const toggleFavorite = async (productId: number) => {
        try {
            const updatedProducts = products.map(product =>
                product.id === productId ? { ...product, favorite: !product.favorite } : product
            );
            await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error updating favorite status in AsyncStorage:', error);
        }
    };

    const toggleShoppingCart = async (productId: number) => {
        try {
            const updatedProducts = products.map(product =>
                product.id === productId ? { ...product, activeCart: !product.activeCart } : product
            );
            await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error updating shopping cart status in AsyncStorage:', error);
        }
    };
    
    useEffect(() => {
        saveProductsToStorage(products);
    }, [products]);

    return (
        <ProductContext.Provider value={{ products, toggleFavorite, toggleShoppingCart }}>
            {children}
        </ProductContext.Provider>
    );
};
