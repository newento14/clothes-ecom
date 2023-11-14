import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/auth')
  auth(@Headers() headers) {
    return this.usersService.validateToken(headers.authorization.split(' ')[1]);
  }

  @Post('/login')
  login(@Body() dto: UserDto) {
    return this.usersService.login(dto);
  }

  @Post('/registration')
  registration(@Body() dto: UserDto) {
    console.log(dto);
    return this.usersService.registration(dto);
  }
}
