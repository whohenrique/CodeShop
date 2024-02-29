import { ProductProps } from "../@types/product";
import Teclado from '@/assets/Teclado Gamer.jpg';
import Caneca from '@/assets/Caneca.jpg';
import Outra from '@/assets/bg.jpg';

export const productList: ProductProps[] = [
    {
        id: 1,
        image: Teclado,
        title: 'Teclado Gamer Redragon',
        description: 'Teclado Gamer Redragon Type-R sem fio, mecânico',
        price: 299.99,
        favorite: false,
        active: false,
      },
      {
        id: 2,
        image: Caneca,
        title: 'Caneca Anime',
        description: 'Caneca do anime Jujutsu Kaisen',
        price: 150.00,
        favorite: false,
        active: false,
      },
      {
        id: 3,
        image: Outra,
        title: 'Mousepad Gamer',
        description: 'Mousepad Gamer super rápido para jogos de RPG e FPS',
        price: 89.99,
        favorite: false,
        active: false,
      },
  ] 