import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductGateway } from './product.gateway';
import { Product, ProductSchema, PriceHistory, PriceHistorySchema } from '../models/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: PriceHistory.name, schema: PriceHistorySchema }])
  ],
  providers: [ProductService, ProductGateway],
  controllers: [ProductController],
})
export class ProductModule {}
