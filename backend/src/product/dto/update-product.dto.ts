import { IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsNumber()
  readonly newPrice: number;
}