import { ReactNode } from 'react';

export interface ProductProps {
    image: ReactNode;
    title: string;
    price: number;
    favorite: boolean;
};
