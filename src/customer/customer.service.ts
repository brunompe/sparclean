import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.create(createCustomerDto);
  }

  async getCustomersDistance() {
    try {
      const allCustomers = await this.customerRepository.findAll();
      const custumersWithDistance = allCustomers.map((customer) => ({
        ...customer,
        distanceToOrigin: Math.sqrt(
          Math.pow(customer.x, 2) + Math.pow(customer.y, 2),
        ),
      }));
      const sortedCustomers = custumersWithDistance.sort(
        (a, b) => a.distanceToOrigin - b.distanceToOrigin,
      );
      return sortedCustomers;
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return this.customerRepository.findAll();
  }

  findOne(id: number) {
    return this.customerRepository.findOneById(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.updateOne(updateCustomerDto, id);
  }

  remove(id: number) {
    return this.customerRepository.deleteOne(id);
  }
}
