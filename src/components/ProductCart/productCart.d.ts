
import { ReactNode } from 'react';

export interface ProductCartProps {
    active: boolean;
    image: ReactNode |  string;
    title: string;
    price: number;
    remove:  () => void;
};
