import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../models/product.model';
import { PriceHistory } from '../models/price-history.model'
import { ProductGateway } from './product.gateway';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(PriceHistory.name) private priceHistoryModel: Model<PriceHistory>,
    private productGateway: ProductGateway
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).populate('priceHistory').exec();
    this.productGateway.emitProductUpdate(product);
    return product;
  }

  async updateProductPrice(id: string, newPrice: number): Promise<Product> {
    const product = await this.productModel.findById(id);

    const priceHistory = new this.priceHistoryModel({
      date: new Date(),
      price: newPrice
    });

    product.priceHistory.push(priceHistory);
    product.currentPrice = newPrice;
    const updatedProduct = await product.save();
    this.productGateway.emitProductUpdate(updatedProduct);
    return updatedProduct;
  }
}
