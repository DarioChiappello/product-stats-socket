import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataView } from 'primereact/dataview';
import { Product } from '../interfaces/ProductInterfaces';
import ProductCard from '../components/ProductCard';
import ProductHeader from '../components/ProductHeader';


const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get<Product[]>(`${import.meta.env.VITE_API_URL}/products`);
              console.log(`${import.meta.env.API_URL}/products`)
              setProducts(response.data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };
      fetchProducts();
  }, []);

  const itemTemplate = (product: Product) => {
      return <ProductCard product={product} />;
  };

  return (
      <div className="datatable-demo text-center">
          <ProductHeader />
          <div className="p-grid">
              <DataView
                  value={products}
                  layout="grid"
                  itemTemplate={itemTemplate}
                  paginator
                  rows={10}
                  emptyMessage="No products found."
              />
          </div>
      </div>
  );
};

export default ProductList;
