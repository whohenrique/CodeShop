import React, { createContext, useState, useContext } from "react";
import { productList } from "@/data/CodeShopList";
import { ProductProps } from "@/@types/product";

interface ProductContextType {
    products: ProductProps[];
    setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<ProductProps[]>(productList);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
