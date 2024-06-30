import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';
import { Card } from 'primereact/card'
import { Chart } from 'primereact/chart';
import { Accordion } from 'primereact/accordion';
import { AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';
import { Product } from '../interfaces/ProductInterfaces';
import formatDate from '../helpers/formatDate';
import generateChartData from '../helpers/generateChartData';
import LoadingTemplate from './LoadingTemplate';

const socket = io(`${import.meta.env.VITE_API_URL}`);


const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<Product>(`${import.meta.env.VITE_API_URL}/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        socket.on(`product/${id}`, (updatedProduct: Product) => {
            setProduct(updatedProduct);
        });

        return () => {
            socket.off(`product/${id}`);
        };
    }, [product, id]);

    if (!product) {
        return <LoadingTemplate />;
    }

    const chartData = generateChartData(product);

    return (
        <div className="surface-0 text-700 text-center">
            <Card title={product.name} subTitle="Product info">
                <div className="flex flex-column align-items-center mb-4">
                    <Image src={product.image} alt={product.name} width="250" preview />
                    <Rating value={product.stars} readOnly cancel={false} className="mt-2"></Rating>
                </div>
                <Message severity="success" text={`Current Price: $${product.currentPrice}`} />
                <h3>Price History</h3>
                <Accordion>
                    <AccordionTab header="Price history">
                        <DataTable value={product.priceHistory} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="date" header="Date" body={formatDate}></Column>
                            <Column field="price" header="Price"></Column>
                        </DataTable>

                    </AccordionTab>
                </Accordion>
                <div className='mt-4'>
                    <Button label="Show price comparation chart" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                    <Dialog header="Price comparation" visible={visible} maximizable style={{ width: '70vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                        <Chart type="line" data={chartData} />
                    </Dialog>
                </div>
            </Card>
        </div>

    );
};

export default ProductDetail;
