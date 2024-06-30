import { PriceHistory } from '../interfaces/ProductInterfaces';

const formatDate = (product: PriceHistory): string => {
    const dateString = product.date;
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export default formatDate;
