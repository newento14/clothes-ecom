import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ReviewModule } from './review/review.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { path } from "app-root-path";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads'
    }),
    ProductsModule, ReviewModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
