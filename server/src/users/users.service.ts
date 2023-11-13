import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "./dto/user.dto";
import * as bcrypt from 'bcryptjs'
import { PrismaService } from "../prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService,
              private prisma: PrismaService) {}

  async createUser(dto: UserDto) {
    const user = await this.prisma.user.create({data: dto})
    return user;
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findFirst({where: {email: email}})
    return user;
  }

  async login(dto: UserDto) {
    const user = await this.getByEmail(dto.email);
    if (!user) {
      throw new HttpException('user with this email does not exist', HttpStatus.NOT_FOUND);
    }
    if (!await bcrypt.compare(dto.password, user.password)) {
      throw new HttpException('bad password', HttpStatus.BAD_REQUEST);
    }
    return this.generateToken(user);
  }

  async registration(dto: UserDto) {
    const userByEmail = await this.getByEmail(dto.email);
    if (userByEmail) {
      throw new HttpException('this email is alredy taken', HttpStatus.BAD_REQUEST);
    }
    const hash = await bcrypt.hash(dto.password, 3);
    const user = await this.createUser({
      email: dto.email,
      password: hash,
    })

    return user;
  }


  private async generateToken(user: User) {
    const payload = {id: user.id};
    return {token: this.jwtService.sign(payload)}
  }
}
