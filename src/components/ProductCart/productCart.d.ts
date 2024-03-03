export interface ProductCartProps {
    id: number;
    title: string;
    image: ImageSourcePropType;
    price: number;
    activeCart: boolean;
    onRemove: () => void;
};
