import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Product } from '../interfaces/ProductInterfaces';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="col-12 sm:col-6 lg:col-3 p-2">
            <Card>
                <div className="flex flex-column align-items-center text-center">
                    <Image src={product.image} alt={product.name} width="250" preview />
                    <h4 className="mt-3">{product.name}</h4>
                    <Rating value={product.stars} readOnly cancel={false} className="mt-2"></Rating>
                    <div className="price mt-2">${product.currentPrice}</div>
                    <Link to={`/products/${product._id}`} className="no-underline">
                        <Button icon="pi pi-info-circle" className="p-button-rounded mt-3" />
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;
