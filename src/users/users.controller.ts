import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserService } from './users.service';
import { LoginDto } from './dto/Login.dto';

@Controller('users')
@Injectable()
export class UserConroller {
  constructor(private readonly userServie: UserService) {}
  // @UseGuards(AuthGuard)
  @Get()
  getAllUsers() {
    return this.userServie.getAllUsers();
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userServie.createUser(body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.userServie.login(body);
  }
}
