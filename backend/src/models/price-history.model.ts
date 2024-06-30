import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PriceHistory extends Document {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  price: number;
}

export const PriceHistorySchema = SchemaFactory.createForClass(PriceHistory);
