import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

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

  @Get('email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Get('id/:id')
  findOneById(@Param('id') id: number) {
    return this.userService.findOneById(id);
  }

  @Patch('id')
  updateOne(@Body() updateUserDto: UpdateUserDto, @Param('id') id: number) {
    return this.userService.updateOne(updateUserDto, id);
  }
}
