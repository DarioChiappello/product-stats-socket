import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PriceHistory, PriceHistorySchema } from './price-history.model';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  currentPrice: number;

  @Prop({ type: [PriceHistorySchema], default: [] })
  priceHistory: PriceHistory[];

  @Prop({ required: true })
  stars: number;

  @Prop({ required: true })
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export { PriceHistory, PriceHistorySchema };
