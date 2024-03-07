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
