import { Injectable } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = await this.prisma.customer.create({
      data: {
        ...createCustomerDto,
        x: +createCustomerDto.x,
        y: +createCustomerDto.y,
      },
    });

    return customer;
  }

  async findAll(): Promise<Customer[]> {
    const customers = this.prisma.customer.findMany();

    return customers;
  }

  async findOneById(id: number): Promise<Customer> {
    const customer = this.prisma.customer.findUnique({
      where: {
        id,
      },
    });

    return customer;
  }

  async findOneByName(name: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        name,
      },
    });
    return customer;
  }

  async updateOne(
    updateCustomerDto: UpdateCustomerDto,
    id: number,
  ): Promise<Customer> {
    const updatedCustomer = this.prisma.customer.update({
      where: {
        id,
      },
      data: {
        ...updateCustomerDto,
        x: +updateCustomerDto.x,
        y: +updateCustomerDto.y,
      },
    });
    return updatedCustomer;
  }

  async deleteOne(id: number) {
    return this.prisma.customer.delete({
      where: {
        id,
      },
    });
  }
}
