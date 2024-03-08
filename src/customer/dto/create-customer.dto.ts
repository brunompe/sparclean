import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsNumber()
  userId: number;

  @IsString()
  x: string;

  @IsString()
  y: string;
}
