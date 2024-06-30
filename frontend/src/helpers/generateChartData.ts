import { Product } from '../interfaces/ProductInterfaces';

const generateChartData = (product: Product) => {
    const labels = product.priceHistory.map(entry => entry.date);
    const data = product.priceHistory.map(entry => entry.price);

    return {
        labels,
        datasets: [
            {
                label: 'Price History',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data
            }
        ]
    };
};

export default generateChartData;
