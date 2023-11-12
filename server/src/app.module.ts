import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ReviewModule } from './review/review.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { path } from "app-root-path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads'
    }),
    ProductsModule, ReviewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
