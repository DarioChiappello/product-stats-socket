export interface PriceHistory {
    date: string;
    price: number;
}

export interface Product {
    _id: string;
    name: string;
    currentPrice: number;
    priceHistory: PriceHistory[];
    stars: number;
    image: string;
}

export interface ProductCardProps {
    product: Product;
}