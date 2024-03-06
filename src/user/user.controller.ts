import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOneById(id: number) {
    return this.userService.findOneById(id);
  }

  @Get(':email')
  findOneByEmail(email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch('id')
  updateOne(updateUserDto: UpdateUserDto, id: number) {
    return this.userService.updateOne(updateUserDto, id);
  }
}
