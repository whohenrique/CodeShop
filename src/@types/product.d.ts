
import { ReactNode } from 'react';

export interface ProductProps {
    id: number;
    image: ReactNode;
    title: string;
    price: number;
    favorite: boolean;
    active: boolean;
};
