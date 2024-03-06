import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return { ...user, password: undefined };
  }

  async findAll(): Promise<User[]> {
    const users = this.prisma.user.findMany();

    return users;
  }

  async findOneById(id: number): Promise<User> {
    const user = this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async updateOne(updateUserDto: UpdateUserDto, id: number): Promise<User> {
    const updatedUser = this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
    return updatedUser;
  }

  async deleteOne(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
