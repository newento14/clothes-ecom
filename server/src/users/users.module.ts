import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from "@nestjs/jwt";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY || 'secretKey',
      signOptions: {expiresIn: '24h'}
    }),
  ],
  exports: [
    UsersService,
    JwtModule,
  ]
})
export class UsersModule {}
