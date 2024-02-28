import { ProductProps } from "../@types/product";
import productImage from '../assets/Teclado Gamer.jpg';

export const productList: ProductProps[] = [
    {
      id: 1,
      image: productImage,
      title: 'Teclado Gamer Redragon',
      price: 299.99,
      favorite: false,
      active: true,
    },
  ] 