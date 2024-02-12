// types.ts

import { ReactNode } from 'react';

export interface ProductProps {
    id: number;
    image: ReactNode;
    title: string;
    price: string;
    favorite: boolean;
    active: boolean;
};
