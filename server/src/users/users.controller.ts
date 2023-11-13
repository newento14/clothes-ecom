import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from './users.service';
import { UserDto } from "./dto/user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  login(@Body() dto: UserDto) {
    return this.usersService.login(dto)
  }

  @Post('/registration')
  registration(@Body() dto: UserDto) {
    return this.usersService.registration(dto)
  }
}
